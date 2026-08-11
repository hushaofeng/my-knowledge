# 微信小游戏协议抓包分析

## 项目背景

为了实现微信小游戏（奔奔王国）的自动化挂机采集，需要对游戏网络协议进行分析。本文档记录完整的抓包流程和注意事项。

## 技术方案对比

| 方案 | 是否需要界面 | 优点 | 缺点 |
|------|-------------|------|------|
| pyautogui | 必须有 | 简单稳定 | 占用屏幕 |
| Mac多桌面 | 部分后台 | 不影响工作 | 会短暂切换桌面 |
| **协议Hook** | **完全后台** | **最高效** | **需要逆向分析** |

**推荐方案：协议Hook** - 直接模拟网络请求，无需界面，资源占用最低。

---

## 环境准备

### 1. 安装mitmproxy

mitmproxy是一个强大的抓包工具，支持HTTPS解密。

```bash
# macOS安装
pip3 install --user --break-system-packages mitmproxy

# 或使用Homebrew
brew install mitmproxy
```

### 2. 验证安装

```bash
mitmproxy --version
```

输出示例：
```
Mitmproxy: 12.2.3
Python:    3.14.5
OpenSSL:   OpenSSL 4.0.1 9 Jun 2026
Platform:  macOS-15.7.9-x86_64
```

### 3. 安装CA证书

mitmproxy需要安装CA证书才能解密HTTPS流量。

```bash
# 首次运行会自动生成证书
mitmdump -p 8888 &
sleep 2
pkill mitmdump

# 安装证书到系统信任链
sudo security add-trusted-cert -d -r trustRoot \n  -k /Library/Keychains/System.keychain \n  ~/.mitmproxy/mitmproxy-ca-cert.pem
```

证书文件位置：
```
~/.mitmproxy/
├── mitmproxy-ca-cert.pem    # CA证书（PEM格式）
├── mitmproxy-ca-cert.p12    # CA证书（PKCS12格式）
├── mitmproxy-ca.pem         # CA私钥
└── mitmproxy-dhparam.pem    # DH参数
```

---

## 抓包流程

### 方式一：命令行模式（推荐）

**终端1 - 启动抓包脚本：**

```bash
mitmdump -s ~/奔奔王国抓包分析.py -p 8888
```

**终端2 - 设置系统代理：**

```bash
# 设置HTTP/HTTPS代理
networksetup -setwebproxy Wi-Fi 127.0.0.1 8888
networksetup -setsecurewebproxy Wi-Fi 127.0.0.1 8888

# 验证代理设置
networksetup -getwebproxy Wi-Fi
networksetup -getsecurewebproxy Wi-Fi
```

**操作游戏：**

打开微信 → 进入奔奔王国 → 执行采集操作

**完成抓包：**

```bash
# 关闭代理
networksetup -setwebproxystate Wi-Fi off
networksetup -setsecurewebproxystate Wi-Fi off
```

### 方式二：Web界面模式

```bash
# 启动Web界面
mitmweb -p 8888
```

浏览器自动打开 http://127.0.0.1:8081

**优点：**
- 可视化界面
- 实时查看请求/响应
- 支持过滤和搜索
- 方便调试

### 方式三：交互式命令行

```bash
# 启动交互式界面
mitmproxy -p 8888
```

**快捷键：**
- `q` - 退出
- `f` - 过滤
- `/` - 搜索
- `Enter` - 查看详情

---

## 抓包脚本

### 自动分析脚本

创建文件 `奔奔王国抓包分析.py`：

```python
"""
奔奔王国 抓包分析辅助脚本
配合 mitmproxy 使用
"""

from mitmproxy import http, ctx
import json
from datetime import datetime

OUTPUT_FILE = "~/奔奔王国_抓包结果.json"

# 关注的关键字
KEYWORDS = [
    "benben", "collect", "harvest", 
    "resource", "kingdom", "game", "api"
]

# 微信域名
WEIXIN_DOMAINS = [
    "weixin.qq.com", "wx.qq.com", 
    "servicewechat.com", "res.wx.qq.com"
]

captured_requests = []

def is_game_request(url: str) -> bool:
    url_lower = url.lower()
    for keyword in KEYWORDS:
        if keyword in url_lower:
            return True
    return False

def save_request(request_data: dict):
    global captured_requests
    captured_requests.append(request_data)
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(captured_requests, f, ensure_ascii=False, indent=2)
    print(f"[保存] {request_data['url']}")

def request(flow: http.HTTPFlow) -> None:
    request = flow.request
    url = request.pretty_url
    method = request.method
    host = request.host
    
    # 只关注POST请求
    if method != "POST":
        return
    
    # 只关注游戏或微信相关请求
    if not (is_game_request(url) or any(d in host for d in WEIXIN_DOMAINS)):
        return
    
    request_data = {
        "timestamp": datetime.now().isoformat(),
        "method": method,
        "url": url,
        "host": host,
        "path": request.path,
        "headers": dict(request.headers),
        "content_type": request.headers.get("Content-Type", ""),
    }
    
    # 解析请求体
    if request.content:
        try:
            content = request.content.decode('utf-8', errors='ignore')
            request_data["body_raw"] = content
            try:
                request_data["body_json"] = json.loads(content)
            except:
                pass
        except Exception as e:
            request_data["body_error"] = str(e)
    
    save_request(request_data)
    print(f"[捕获] {method} {url}")

def response(flow: http.HTTPFlow) -> None:
    response = flow.response
    if response.status_code == 200 and response.content:
        try:
            content = response.content.decode('utf-8', errors='ignore')
            global captured_requests
            if captured_requests:
                captured_requests[-1]["response"] = {
                    "status": response.status_code,
                    "content": content[:500]
                }
                try:
                    captured_requests[-1]["response"]["json"] = json.loads(content)
                except:
                    pass
                with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
                    json.dump(captured_requests, f, ensure_ascii=False, indent=2)
        except:
            pass

def done():
    print(f"\n[完成] 共捕获 {len(captured_requests)} 个请求")
    print(f"[文件] {OUTPUT_FILE}")
```

---

## 抓包结果分析

### 关键信息提取

抓包完成后，需要分析以下内容：

```json
{
  "timestamp": "2026-08-11T18:00:00",
  "method": "POST",
  "url": "https://game.example.com/api/collect",
  "headers": {
    "Content-Type": "application/json",
    "Cookie": "session=xxx",
    "X-Token": "xxx"
  },
  "body_json": {
    "action": "collect",
    "resource_id": "12345",
    "timestamp": 1234567890
  },
  "response": {
    "status": 200,
    "json": {
      "code": 0,
      "message": "success",
      "data": {...}
    }
  }
}
```

### 需要关注的信息

1. **登录态**
   - Cookie
   - Token
   - Session ID
   - 签名

2. **采集接口**
   - URL路径
   - 请求方法（POST/GET）
   - 必需参数

3. **加密方式**
   - 请求体是否加密
   - 是否有签名验证
   - 算法类型（MD5/SHA/AES/自定义）

4. **防刷机制**
   - 时间戳验证
   - 设备指纹
   - IP限制
   - 频率限制

---

## 常见问题

### Q1: 启动抓包后小程序打不开？

**原因：** CA证书未安装或不被信任

**解决：**
```bash
# 重新安装证书
sudo security add-trusted-cert -d -r trustRoot \n  -k /Library/Keychains/System.keychain \n  ~/.mitmproxy/mitmproxy-ca-cert.pem

# 重启微信
```

### Q2: 看不到HTTPS请求内容？

**原因：** SSL Pinning（证书锁定）

**解决：**
- 需要root设备或使用Frida绕过
- 微信小游戏通常不会启用SSL Pinning

### Q3: 微信检测到代理？

**原因：** 微信有代理检测机制

**解决：**
```bash
# 使用透明代理模式
sudo mitmdump --mode transparent -p 8888
```

### Q4: 如何抓取手机上的流量？

**步骤：**
1. 手机WiFi代理指向Mac的IP
2. 手机浏览器访问 http://mitm.it 安装证书
3. 在手机上操作游戏

---

## 下一步：编写自动化脚本

抓包成功后，根据分析的协议编写Python自动化脚本：

```python
import requests
import json

# 配置
API_URL = "https://game.example.com/api/collect"
HEADERS = {
    "Content-Type": "application/json",
    "Cookie": "session=xxx",  # 从抓包获取
    "X-Token": "xxx"           # 从抓包获取
}

def collect():
    """执行采集"""
    data = {
        "action": "collect",
        "resource_id": "12345"
    }
    
    response = requests.post(API_URL, headers=HEADERS, json=data)
    result = response.json()
    
    if result["code"] == 0:
        print("采集成功")
    else:
        print(f"采集失败: {result['message']}")

# 循环采集
while True:
    collect()
    time.sleep(5)
```

---

## 相关文件

| 文件 | 说明 |
|------|------|
| `奔奔王国抓包分析.py` | mitmproxy自动分析脚本 |
| `奔奔王国_抓包结果.json` | 抓包结果（自动生成） |
| `奔奔王国自动采集_PC.py` | PC端自动化脚本 |
| `奔奔王国_Mac多桌面版.py` | Mac多桌面挂机脚本 |

---

## 参考资源

- [mitmproxy官方文档](https://docs.mitmproxy.org/)
- [微信小游戏开发文档](https://developers.weixin.qq.com/minigame/dev/guide/)
- [Python requests库文档](https://requests.readthedocs.io/)

---

*文档创建时间：2026-08-11*
*最后更新：2026-08-11*