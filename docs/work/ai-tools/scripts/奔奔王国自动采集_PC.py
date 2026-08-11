"""
奔奔王国 PC端自动采集脚本
基于 pyautogui 实现

安装依赖：
pip3 install pyautogui pillow opencv-python

使用方法：
1. 打开微信PC版
2. 进入奔奔王国游戏
3. 运行此脚本: python3 奔奔王国自动采集_PC.py
"""

import pyautogui
import time
import cv2
import numpy as np
from PIL import Image
import threading
import keyboard

# ==================== 配置区域 ====================
CONFIG = {
    # 循环次数 (0 = 无限循环)
    'loop_count': 0,
    
    # 每次采集间隔（秒）
    'collect_interval': 3,
    
    # 游戏窗口标题关键字
    'window_title': '微信',
    
    # 截图保存路径
    'screenshot_dir': './screenshots',
    
    # 是否启用图像识别模式
    'use_image_recognition': False,
    
    # 采集按钮图像模板（需要自己截取保存）
    'collect_button_template': './collect_button.png',
    
    # 点击坐标（不使用图像识别时）
    # 格式: {'collect': (x, y), 'confirm': (x, y)}
    'click_positions': {
        'collect': (400, 500),    # 采集按钮位置（需调整）
        'confirm': (500, 500),    # 确认按钮位置（需调整）
    },
    
    # 按键停止
    'stop_key': 'q',
}

# ==================== 全局变量 ====================
running = True

# ==================== 工具函数 ====================

def stop_script():
    """停止脚本"""
    global running
    running = False
    print("\n[INFO] 脚本已停止")

def find_game_window():
    """查找游戏窗口"""
    try:
        import pygetwindow as gw
        windows = gw.getWindowsWithTitle(CONFIG['window_title'])
        if windows:
            return windows[0]
    except:
        pass
    return None

def take_screenshot():
    """截取屏幕"""
    screenshot = pyautogui.screenshot()
    return screenshot

def save_screenshot(img, name='screenshot'):
    """保存截图"""
    import os
    os.makedirs(CONFIG['screenshot_dir'], exist_ok=True)
    timestamp = time.strftime('%Y%m%d_%H%M%S')
    path = f"{CONFIG['screenshot_dir']}/{name}_{timestamp}.png"
    img.save(path)
    print(f"[INFO] 截图已保存: {path}")
    return path

def find_image_on_screen(template_path, screenshot=None, confidence=0.8):
    """在屏幕上查找图像"""
    if screenshot is None:
        screenshot = take_screenshot()
    
    # 读取模板
    template = cv2.imread(template_path)
    if template is None:
        print(f"[ERROR] 无法读取模板: {template_path}")
        return None
    
    # 转换格式
    screenshot_cv = cv2.cvtColor(np.array(screenshot), cv2.COLOR_RGB2BGR)
    
    # 模板匹配
    result = cv2.matchTemplate(screenshot_cv, template, cv2.TM_CCOEFF_NORMED)
    min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(result)
    
    if max_val >= confidence:
        # 计算中心点
        h, w = template.shape[:2]
        center_x = max_loc[0] + w // 2
        center_y = max_loc[1] + h // 2
        return (center_x, center_y)
    
    return None

def click_position(pos, clicks=1, interval=0.1):
    """点击指定位置"""
    x, y = pos
    for _ in range(clicks):
        pyautogui.click(x, y)
        time.sleep(interval)
    print(f"[INFO] 点击位置: ({x}, {y})")

def move_to_game_window():
    """激活游戏窗口"""
    window = find_game_window()
    if window:
        try:
            window.activate()
            time.sleep(0.5)
            print("[INFO] 已激活游戏窗口")
            return True
        except:
            print("[WARN] 无法激活窗口，请手动点击游戏窗口")
    return False

# ==================== 核心逻辑 ====================

def auto_collect():
    """自动采集主逻辑"""
    global running
    
    count = 0
    
    print("\n" + "="*50)
    print("奔奔王国 自动采集脚本已启动")
    print(f"按 '{CONFIG['stop_key']}' 键停止脚本")
    print("="*50 + "\n")
    
    # 尝试激活游戏窗口
    move_to_game_window()
    
    while running and (CONFIG['loop_count'] == 0 or count < CONFIG['loop_count']):
        try:
            print(f"\n[INFO] 开始第 {count + 1} 次采集...")
            
            # 方式1：图像识别点击（需要模板图片）
            if CONFIG['use_image_recognition']:
                collect_pos = find_image_on_screen(CONFIG['collect_button_template'])
                if collect_pos:
                    click_position(collect_pos)
                else:
                    print("[WARN] 未找到采集按钮")
            else:
                # 方式2：固定坐标点击
                click_position(CONFIG['click_positions']['collect'])
            
            # 等待采集动画
            time.sleep(1)
            
            # 点击确认/领取
            if 'confirm' in CONFIG['click_positions']:
                click_position(CONFIG['click_positions']['confirm'])
            
            count += 1
            print(f"[INFO] 采集完成，已累计采集 {count} 次")
            
            # 等待下一次采集
            time.sleep(CONFIG['collect_interval'])
            
        except Exception as e:
            print(f"[ERROR] 采集出错: {e}")
            time.sleep(2)
    
    print(f"\n[INFO] 脚本已结束，共采集 {count} 次")

def setup_stop_listener():
    """设置停止监听"""
    keyboard.on_press_key(CONFIG['stop_key'], lambda _: stop_script())

# ==================== 辅助功能 ====================

def get_mouse_position():
    """获取鼠标当前位置（用于调试）"""
    print("\n[INFO] 将鼠标移动到目标位置，5秒后获取坐标...")
    time.sleep(5)
    pos = pyautogui.position()
    print(f"[INFO] 当前鼠标位置: {pos}")
    print(f"[INFO] 请将此坐标填入配置文件")
    return pos

def debug_screenshot():
    """调试截图（查看游戏界面）"""
    print("\n[INFO] 正在截图...")
    screenshot = take_screenshot()
    path = save_screenshot(screenshot, 'debug')
    print(f"[INFO] 请查看截图: {path}")
    return path

def calibrate_positions():
    """校准点击位置（交互式）"""
    print("\n" + "="*50)
    print("点击位置校准模式")
    print("="*50)
    
    positions = {}
    
    for button_name in ['collect', 'confirm']:
        print(f"\n[INFO] 请将鼠标移动到【{button_name}】按钮位置")
        print("[INFO] 5秒后自动记录坐标...")
        time.sleep(5)
        pos = pyautogui.position()
        positions[button_name] = pos
        print(f"[INFO] 已记录 {button_name} 位置: {pos}")
    
    print("\n" + "="*50)
    print("校准完成，请将以下配置复制到脚本中:")
    print("="*50)
    print("'click_positions': {")
    for name, pos in positions.items():
        print(f"    '{name}': ({pos[0]}, {pos[1]}),")
    print("}")
    
    return positions

# ==================== 主程序 ====================

def main():
    import sys
    
    if len(sys.argv) > 1:
        arg = sys.argv[1]
        
        if arg == '--calibrate':
            calibrate_positions()
        elif arg == '--debug':
            debug_screenshot()
        elif arg == '--position':
            get_mouse_position()
        else:
            print(f"未知参数: {arg}")
            print("可用参数:")
            print("  --calibrate  校准点击位置")
            print("  --debug      截图调试")
            print("  --position   获取鼠标位置")
    else:
        # 运行自动采集
        setup_stop_listener()
        auto_collect()

if __name__ == '__main__':
    main()