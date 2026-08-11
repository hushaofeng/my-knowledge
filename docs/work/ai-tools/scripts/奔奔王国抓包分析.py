"""
奔奔王国 抓包分析辅助脚本
配合 mitmproxy 使用

用法：
1. 启动 mitmproxy 并加载此脚本：
   mitmdump -s 奔奔王国抓包分析.py -p 8888

2. 操作微信游戏采集

3. 关键请求会自动保存到文件
"""

from mitmproxy import http, ctx
import json
import time
from datetime import datetime

# 输出文件
OUTPUT_FILE = "/Users/hushaofeng/奔奔王国_抓包结果.json"

# 关注的关键字（用于过滤游戏相关请求）
KEYWORDS = [
    "benben",      # 游戏名关键字（需根据实际调整）
    "collect",     # 采集相关
    "harvest",     # 收获相关
    "resource",    # 资源相关
    "kingdom",     # 王国相关
    "game",        # 游戏
    "api",         # API接口
]

# 已知微信域名
WEIXIN_DOMAINS = [
    "weixin.qq.com",
    "wx.qq.com",
    "servicewechat.com",
    "res.wx.qq.com",
]

# 保存的请求数据
captured_requests = []

def is_game_request(url: str) -> bool:
    """判断是否是游戏相关请求"""
    url_lower = url.lower()
    
    # 检查关键字
    for keyword in KEYWORDS:
        if keyword in url_lower:
            return True
    
    return False

def is_weixin_request(host: str) -> bool:
    """判断是否是微信请求"""
    for domain in WEIXIN_DOMAINS:
        if domain in host:
            return True
    return False

def save_request(request_data: dict):
    """保存请求到文件"""
    global captured_requests
    captured_requests.append(request_data)
    
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(captured_requests, f, ensure_ascii=False, indent=2)
    
    print(f"[保存] {request_data['url']}")

def request(flow: http.HTTPFlow) -> None:
    """处理请求"""
    request = flow.request
    
    # 获取基本信息
    url = request.pretty_url
    method = request.method
    host = request.host
    
    # 过滤：只关注POST请求（通常是数据提交）
    if method != "POST":
        return
    
    # 过滤：只关注游戏或微信相关请求
    if not (is_game_request(url) or is_weixin_request(host)):
        return
    
    # 提取请求信息
    request_data = {
        "timestamp": datetime.now().isoformat(),
        "method": method,
        "url": url,
        "host": host,
        "path": request.path,
        "headers": dict(request.headers),
        "content_type": request.headers.get("Content-Type", ""),
    }
    
    # 尝试解析请求体
    try:
        if request.content:
            content = request.content.decode('utf-8', errors='ignore')
            request_data["body_raw"] = content
            
            # 尝试解析JSON
            try:
                request_data["body_json"] = json.loads(content)
            except:
                pass
            
            # 尝试解析表单
            if "form" in request_data["content_type"]:
                request_data["body_form"] = dict(request.urlencoded_form)
    except Exception as e:
        request_data["body_error"] = str(e)
    
    # 保存请求
    save_request(request_data)
    
    # 控制台输出
    print("\n" + "="*60)
    print(f"[捕获] {method} {url}")
    print(f"[时间] {request_data['timestamp']}")
    if "body_json" in request_data:
        print(f"[数据] {json.dumps(request_data['body_json'], ensure_ascii=False)}")
    print("="*60)

def response(flow: http.HTTPFlow) -> None:
    """处理响应"""
    response = flow.response
    request = flow.request
    
    # 只关注刚才捕获的请求的响应
    url = request.pretty_url
    
    if response.status_code == 200:
        # 尝试解析响应
        try:
            if response.content:
                content = response.content.decode('utf-8', errors='ignore')
                
                # 更新最后一条记录的响应
                global captured_requests
                if captured_requests:
                    captured_requests[-1]["response"] = {
                        "status": response.status_code,
                        "content": content[:500],  # 只保存前500字符
                    }
                    
                    # 尝试解析JSON响应
                    try:
                        response_json = json.loads(content)
                        captured_requests[-1]["response"]["json"] = response_json
                        print(f"[响应] {json.dumps(response_json, ensure_ascii=False)[:200]}")
                    except:
                        pass
                    
                    # 保存到文件
                    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
                        json.dump(captured_requests, f, ensure_ascii=False, indent=2)
        except Exception as e:
            print(f"[响应解析错误] {e}")

def done():
    """脚本结束"""
    print(f"\n[完成] 共捕获 {len(captured_requests)} 个请求")
    print(f"[文件] 结果已保存到: {OUTPUT_FILE}")