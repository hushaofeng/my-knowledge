---
title: Python 安全编程
date: 2026-09-03
tags: [网络安全, 初级]
---

# 04 · Python 安全编程——你的超车道

> 别人学安全要同时补编程，你只需要补"攻击者怎么用编程"。目标：把通用工程能力重定向到安全工具，年内沉淀 3 个入库工具。

## 🎯 学习目标

1. 从零写出一个可用的 TCP 端口扫描器（先单线程后并发，理解提速原理）
2. 写出目录爆破器与子域名枚举器
3. 用 asyncio 重构扫描器，量化对比性能
4. 建立自己的 PoC 工程规范（参数化/日志/免责声明）

## 📖 核心知识

### 4.1 端口扫描器：从 50 行到工程化

**版本 1：全连接扫描（理解原理）**

```python
# 仅限授权靶场使用 (本机虚拟机 192.168.56.0/24)
import socket

def scan(host, port, timeout=0.5):
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.settimeout(timeout)
    try:
        s.connect((host, port))          # 完整三次握手 = nmap -sT 的等价物
        return True                       # 端口开放
    except (socket.timeout, ConnectionRefusedError):
        return False
    finally:
        s.close()

open_ports = [p for p in range(1, 1025) if scan('192.168.56.101', p)]
print('开放端口:', open_ports)
```

逐段讲：`settimeout` 防止死等；`ConnectionRefusedError` = RST（端口关）；超时 = 过滤（防火墙 DROP）——**三种结果对应三种网络状态**，这是扫描器能"探测防火墙行为"的原理。

**版本 2：并发（threading 池）**

```python
from concurrent.futures import ThreadPoolExecutor, as_completed

def scan_range(host, ports, workers=200):
    with ThreadPoolExecutor(workers) as ex:
        futs = {ex.submit(scan, host, p): p for p in ports}
        return [f.result() for f in as_completed(futs) if f.result()]
```

为什么快：单线程最慢的是等超时（I/O 等待）；线程池把等待重叠。对比 nmap `-sS`（SYN 半开，内核态 raw socket）更快——线程版 ≈ `-sT`。

### 4.2 目录爆破器（requests 版）

```python
# 仅限授权靶场
import requests
from concurrent.futures import ThreadPoolExecutor

WORDS = ['admin', 'login', 'backup', '.git', 'robots.txt', 'phpmyadmin']

def check(base, path):
    try:
        r = requests.get(f'{base}/{path}', timeout=3, allow_redirects=False)
        if r.status_code not in (404,):
            return path, r.status_code, len(r.content)
    except requests.RequestException:
        return None
    return None

with ThreadPoolExecutor(20) as ex:
    for res in ex.map(lambda p: check('http://192.168.56.101', p), WORDS):
        if res: print(f'/{res[0]:<20} {res[1]} len={res[2]}')
```

要点：`allow_redirects=False`（302 也可能是发现）；记录 `len(content)`（软 404 的内容长度判别）；限流意识——加 sleep/退避，别把靶场打挂（真实 SRC 也有速率规则）。

### 4.3 子域名枚举

两条腿：
1. **字典爆破**：dnspython 解析 `{'api', 'dev', 'test', ...}.target.com`
2. **证书透明度（无需爆破）**：`curl -s "https://crt.sh/?q=%25.target.com&output=json"` ——CT 日志记录了所有签发过的证书，泄露子域名

```python
# crt.sh 查询（合法公开数据）
import requests
r = requests.get('https://crt.sh/?q=%25.example.com&output=json', timeout=20)
names = {n.strip() for row in r.json() for n in row['name_value'].split('\n')}
print('\n'.join(sorted(names)))
```

### 4.4 asyncio 重构（性能思维）

```python
import asyncio

async def scan_async(host, port, sem):
    async with sem:                          # 信号量限流
        try:
            _, w = await asyncio.wait_for(
                asyncio.open_connection(host, port), timeout=0.5)
            w.close()
            return port
        except Exception:
            return None

async def main(host):
    sem = asyncio.Semaphore(500)
    tasks = [scan_async(host, p, sem) for p in range(1, 1025)]
    return [p for p in await asyncio.gather(*tasks) if p]
```

对比实验：单线程 1024 端口 ≈ 8 分钟 → 线程 200 ≈ 5s → asyncio 500 ≈ 2s。理解瓶颈都是 I/O 等待。

### 4.5 PoC 工程规范（工程师的降维打击）

```python
#!/usr/bin/env python3
"""CVE-XXXX-XXXXX PoC — 仅用于授权测试与安全研究
Usage: python3 poc.py --target http://authorized.target --port 8080
"""
import argparse, logging, sys

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--target', required=True)      # 目标必须显式传入
    ap.add_argument('--port', type=int, default=8080)
    args = ap.parse_args()
    logging.basicConfig(level=logging.INFO,
        format='%(asctime)s %(levelname)s %(message)s')
    ...
```

清单：显式目标参数（不硬编码）｜日志可追溯｜退出码区分成功/失败｜超时可配｜文件头免责声明｜不做破坏性默认动作。

## 🔬 动手实操

按 W14-W17 顺序完成 4 个工具，全部放入 `tools/` 目录并写 README（用途/用法/授权声明）。验收：扫描器对你自己的 DVWA 虚拟机输出与 nmap 结果一致。

## ⚠️ 常见坑

1. 无限流扫描把靶场/业务打挂——工具必须有并发与速率参数
2. 把超时全当"端口关闭"——DROP 与 REFUSED 语义不同
3. requests 无超时——一行 `timeout=3` 救你的整个脚本
4. 硬编码目标——PoC 必须参数化，这是专业与玩具的分界线
5. 忽略编码/重定向——响应体长度与跳转都是信息

## ✅ 自测题

<details>
<summary>1. socket 超时和 ConnectionRefused 分别对应什么网络行为？</summary>

超时 = 无响应（防火墙 DROP 或主机不在线）；Refused = 收到 RST（主机在线但端口未监听）。

</details>

<details>
<summary>2. 为什么 crt.sh 能枚举子域名？</summary>

CA 签发证书必须写入公开的证书透明度日志，SAN 字段里的域名全部可查——"内网命名规范"常因此泄露。

</details>

<details>
<summary>3. asyncio 比 threading 快的真正原因？</summary>

单线程事件循环避免了线程切换开销与 GIL 争用，I/O 等待在 await 处让出——纯 I/O 密集场景优势最大。

</details>

<details>
<summary>4. 目录爆破为什么要记录响应长度？</summary>

很多站 404 也返回 200 状态码（软 404 自定义页面），长度一致性可以识别"真 404 模板"。

</details>

<details>
<summary>5. PoC 为什么必须参数化目标？</summary>

防误用与追责清晰：显式传入意味着使用者明确知道自己在打谁，也是授权范围控制的工程实现。

</details>

## 🔗 对应周任务与资源

- 对应计划：**第1年 W14-W17**；资源：《Python 黑客编程入门》、dnspython/requests/asyncio 官方文档
