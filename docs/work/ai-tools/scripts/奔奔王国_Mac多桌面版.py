"""
奔奔王国 Mac多桌面自动采集脚本
利用macOS Spaces多桌面功能实现后台挂机

原理：
- 桌面1：用户正常工作
- 桌面2：运行游戏和脚本
- 脚本自动切换桌面操作

使用前准备：
1. 创建新桌面：Mission Control → 鼠标移到顶部 → 点击"+"
2. 将微信游戏窗口拖到桌面2
3. 运行此脚本

快捷键：
- Ctrl+↑ 打开Mission Control
- Ctrl+1/2 切换桌面
"""

import pyautogui
import time
import subprocess
import keyboard

# ==================== 配置 ====================
CONFIG = {
    # 游戏所在桌面编号
    'game_desktop': 2,
    
    # 用户工作桌面编号
    'work_desktop': 1,
    
    # 采集间隔（秒）
    'collect_interval': 5,
    
    # 循环次数（0=无限）
    'loop_count': 0,
    
    # 停止快捷键
    'stop_key': 'esc',
    
    # 点击位置（需要校准）
    'click_positions': {
        'collect': (400, 500),
        'confirm': (500, 500),
    },
    
    # 每次操作后是否返回工作桌面
    'return_to_work': True,
}

# ==================== 全局变量 ====================
running = True

# ==================== 桌面切换功能 ====================

def switch_desktop(desktop_num):
    """
    切换到指定桌面
    macOS快捷键: Ctrl + 数字键
    """
    print(f"[INFO] 切换到桌面 {desktop_num}")
    
    # 使用AppleScript切换桌面
    script = f'''
    tell application "System Events"
        keystroke "{desktop_num}" using control down
    end tell
    '''
    
    try:
        subprocess.run(['osascript', '-e', script], check=True)
        time.sleep(0.5)  # 等待切换完成
    except Exception as e:
        print(f"[ERROR] 切换桌面失败: {e}")
        # 备用方案：使用pyautogui模拟快捷键
        pyautogui.keyDown('ctrl')
        pyautogui.press(str(desktop_num))
        pyautogui.keyUp('ctrl')
        time.sleep(0.5)

def get_current_desktop():
    """获取当前桌面编号"""
    try:
        # 使用yabai或其他工具获取当前桌面
        # 这里简化处理，默认返回1
        return 1
    except:
        return 1

# ==================== 核心功能 ====================

def click_at_position(pos):
    """在指定位置点击"""
    x, y = pos
    pyautogui.click(x, y)
    print(f"[INFO] 点击位置: ({x}, {y})")
    time.sleep(0.3)

def do_collect():
    """执行一次采集操作"""
    # 点击采集按钮
    click_at_position(CONFIG['click_positions']['collect'])
    time.sleep(1)
    
    # 点击确认按钮（如果有）
    if CONFIG['click_positions'].get('confirm'):
        click_at_position(CONFIG['click_positions']['confirm'])
        time.sleep(0.5)

def stop_script():
    """停止脚本"""
    global running
    running = False
    print("\n[INFO] 脚本已停止")

# ==================== 主循环 ====================

def main():
    global running
    
    print("\n" + "="*50)
    print("奔奔王国 Mac多桌面自动采集脚本")
    print("="*50)
    print(f"\n游戏桌面: {CONFIG['game_desktop']}")
    print(f"工作桌面: {CONFIG['work_desktop']}")
    print(f"采集间隔: {CONFIG['collect_interval']}秒")
    print(f"按 {CONFIG['stop_key']} 键停止脚本")
    print("="*50 + "\n")
    
    # 注册停止快捷键
    keyboard.on_press_key(CONFIG['stop_key'], lambda _: stop_script())
    
    count = 0
    original_desktop = get_current_desktop()
    
    while running and (CONFIG['loop_count'] == 0 or count < CONFIG['loop_count']):
        try:
            print(f"\n[INFO] 开始第 {count + 1} 次采集...")
            
            # 切换到游戏桌面
            switch_desktop(CONFIG['game_desktop'])
            time.sleep(0.5)
            
            # 执行采集
            do_collect()
            count += 1
            print(f"[INFO] 采集完成，已累计 {count} 次")
            
            # 返回工作桌面
            if CONFIG['return_to_work']:
                switch_desktop(CONFIG['work_desktop'])
            
            # 等待下次采集
            print(f"[INFO] 等待 {CONFIG['collect_interval']} 秒...")
            time.sleep(CONFIG['collect_interval'])
            
        except KeyboardInterrupt:
            stop_script()
        except Exception as e:
            print(f"[ERROR] 采集出错: {e}")
            time.sleep(2)
    
    # 恢复原桌面
    if original_desktop:
        switch_desktop(original_desktop)
    
    print(f"\n[INFO] 脚本结束，共采集 {count} 次")

# ==================== 校准工具 ====================

def calibrate():
    """交互式校准点击位置"""
    print("\n" + "="*50)
    print("点击位置校准")
    print("="*50)
    
    print("\n[提示] 请先切换到游戏桌面")
    input("准备好后按回车继续...")
    
    positions = {}
    
    for button_name in ['collect', 'confirm']:
        print(f"\n[INFO] 5秒后开始记录【{button_name}】按钮位置...")
        print("[提示] 请将鼠标移动到目标按钮上")
        time.sleep(5)
        
        pos = pyautogui.position()
        positions[button_name] = pos
        print(f"[INFO] 已记录 {button_name} 位置: {pos}")
    
    print("\n" + "="*50)
    print("校准完成！请将以下配置复制到脚本中：")
    print("="*50)
    print("'click_positions': {")
    for name, pos in positions.items():
        print(f"    '{name}': ({pos[0]}, {pos[1]}),")
    print("}")
    
    return positions

# ==================== 入口 ====================

if __name__ == '__main__':
    import sys
    
    if len(sys.argv) > 1:
        if sys.argv[1] == '--calibrate':
            calibrate()
        else:
            print(f"未知参数: {sys.argv[1]}")
            print("用法: python3 脚本.py [--calibrate]")
    else:
        main()