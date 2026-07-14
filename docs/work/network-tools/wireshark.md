# Wireshark 网络协议分析工具

## 一、工具简介

Wireshark 是全球最广泛使用的网络协议分析器（前身 Ethereal）。它能实时捕获网络数据包，并详细显示每个包的协议信息，是网络工程师、安全研究人员、开发者的必备工具。

| 属性 | 说明 |
|------|------|
| 官网 | https://www.wireshark.org |
| 开源协议 | GPL v2 |
| 支持平台 | Windows / macOS / Linux |
| 当前版本 | 4.6.x |
| 解析协议 | 2000+ 种 |

---

## 二、核心功能

### 1. 数据包捕获
- 支持以太网、Wi-Fi、蓝牙、USB 等多种网络接口
- 实时捕获，支持高流量环境（百万级 PPS）
- 多种捕获过滤器，减少无关数据

### 2. 协议解析
- 支持 2000+ 协议深度解析（TCP/IP、HTTP、DNS、TLS、SMB、数据库协议等）
- 自动识别协议类型并分层展示
- 支持自定义协议解析器（Lua 脚本）

### 3. 过滤与搜索
- **捕获过滤器**：BPF 语法，在捕获阶段过滤
- **显示过滤器**：强大语法，快速定位目标数据包
- 支持正则、统计函数、协议字段组合查询

### 4. 统计分析
- 协议分级统计（Protocol Hierarchy）
- 会话统计（Conversations）
- 端点统计（Endpoints）
- IO 图表（可视化流量趋势）
- RTT 分析、吞吐量分析

### 5. 数据包操作
- 数据包导出（原始数据、JSON、CSV、C arrays）
- 数据包重组（TCP Stream 重组）
- 文件提取（从流量中提取传输的文件）
- VoIP 通话分析（SIP/RTP）

### 6. 安全分析
- 解密 TLS/SSL 流量（需导入密钥）
- 分析恶意流量特征
- 检测异常连接、端口扫描、C2 通信

---

## 三、安装配置

### macOS 安装

```bash
# Homebrew 安装（推荐）
brew install --cask wireshark

# 安装 ChmodBPF（抓包非本机流量需要）
sudo /Applications/Wireshark.app/Contents/MacOS-extra/ChmodBPF/install
```

### Linux 安装

```bash
# Debian/Ubuntu
sudo apt install wireshark

# CentOS/RHEL
sudo yum install wireshark wireshark-gnome

# 添加用户到 wireshark 组（非 root 抓包）
sudo usermod -a -G wireshark $USER
```

### Windows 安装

1. 下载：https://www.wireshark.org/download.html
2. 安装时勾选 Npcap（抓包驱动）
3. 安装 USBPcap（如需抓 USB 流量）

---

## 四、界面介绍

```
┌─────────────────────────────────────────────────────────────┐
│  菜单栏  │  主工具栏  │  过滤器工具栏                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ 数据包列表（Packet List）                            │   │
│  │ No. | Time | Source | Destination | Protocol | Info │   │
│  ├─────────────────────────────────────────────────────┤   │
│  │ 数据包详情（Packet Details）                         │   │
│  │ 协议树形结构，展开查看各层详细信息                    │   │
│  ├─────────────────────────────────────────────────────┤   │
│  │ 数据包字节（Packet Bytes）                           │   │
│  │ 十六进制 + ASCII 显示原始数据                        │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  状态栏：当前状态 | 过滤信息 | 选中包信息 | 选中包比例      │
└─────────────────────────────────────────────────────────────┘
```

### 快捷键

| 快捷键 | 功能 |
|--------|------|
| Ctrl+E / Cmd+E | 开始/停止捕获 |
| Ctrl+K / Cmd+K | 捕获选项 |
| Ctrl+F / Cmd+F | 查找数据包 |
| Ctrl+/ / Cmd+/ | 查找标记 |
| F3 | 查找下一个 |
| Ctrl+Shift+S | 另存为 |
| Ctrl+H | 追踪 TCP 流 |

---

## 五、过滤器语法

### 显示过滤器（Display Filter）

#### 基本语法

```bash
# 按协议
tcp                      # 所有 TCP 包
http                     # 所有 HTTP 包
dns                       # 所有 DNS 包

# 按 IP 地址
ip.addr == 192.168.1.1              # 源或目的为该 IP
ip.src == 192.168.1.1               # 源 IP
ip.dst == 10.0.0.0/8                # 目的 IP 网段

# 按端口
tcp.port == 80                      # TCP 80 端口
tcp.dstport == 443                  # TCP 目的端口
udp.port >= 5000 && udp.port <= 6000

# 按内容
http.request.method == "GET"        # HTTP GET 请求
http contains "password"            # HTTP 包含关键字
tcp.payload contains "admin"

# 组合逻辑
ip.addr == 192.168.1.1 && tcp.port == 80
ip.addr == 192.168.1.1 || ip.addr == 10.0.0.1
!(arp || icmp)                      # 排除 ARP 和 ICMP
```

#### 常用过滤表达式

```bash
# TCP 分析
tcp.analysis.retransmission         # TCP 重传
tcp.analysis.duplicate_ack          # 重复 ACK
tcp.flags.syn == 1                  # SYN 包
tcp.flags.reset == 1                # RST 包

# HTTP 分析
http.request                        # 所有 HTTP 请求
http.response.code == 200           # HTTP 200 响应
http.response.code >= 400           # HTTP 错误响应
http.host contains "google"

# DNS 分析
dns.qry.name == "example.com"       # DNS 查询
dns.flags.response == 1             # DNS 响应

# TLS/SSL
tls.handshake.type == 1             # Client Hello
tls.handshake.type == 2             # Server Hello
```

### 捕获过滤器（Capture Filter）

使用 BPF 语法，更简洁但功能较少：

```bash
# 基本语法
host 192.168.1.1                    # 特定主机
net 192.168.1.0/24                  # 特定网段
port 80                             # 特定端口

# 协议过滤
tcp                                 # TCP
udp                                 # UDP
icmp                                # ICMP

# 组合
host 192.168.1.1 and port 80
tcp port 80 or tcp port 443
not port 22                         # 排除 SSH
```

---

## 六、实用场景

### 场景 1：排查网络连接问题

```bash
# 1. 过滤特定目标的 TCP 流
ip.addr == 目标IP && tcp

# 2. 查看重传和丢包
tcp.analysis.retransmission || tcp.analysis.lost_segment

# 3. 查看 TCP 握手
tcp.flags.syn == 1 || tcp.flags.ack == 1

# 4. 追踪 TCP 流（右键 → 追踪流 → TCP 流）
```

### 场景 2：分析 HTTP 请求

```bash
# 1. 过滤 HTTP 请求
http.request

# 2. 查看特定 URL
http.request.uri contains "api"

# 3. 查看 POST 请求体
http.request.method == "POST"

# 4. 导出对象：文件 → 导出对象 → HTTP
```

### 场景 3：分析 DNS 问题

```bash
# 1. 过滤 DNS 流量
dns

# 2. 查看特定域名的查询
dns.qry.name contains "example.com"

# 3. 查看 DNS 响应码（NXDOMAIN 等）
dns.flags.rcode != 0
```

### 场景 4：检测异常流量

```bash
# 1. 扫描行为
tcp.flags.syn == 1 && tcp.flags.ack == 0

# 2. 大量连接尝试
tcp.port == 22 and tcp.flags.syn == 1

# 3. 可疑外连
ip.dst != 内网网段 && tcp.flags.syn == 1

# 4. 统计会话
统计 → Conversations → TCP
```

### 场景 5：提取传输文件

```
1. 文件 → 导出对象 → HTTP/SMB/FTP
2. 选择要恢复的文件
3. 保存到本地
```

### 场景 6：解密 TLS 流量

**方式一：导入私钥**
```
编辑 → 首选项 → Protocols → TLS → RSA Keys List
添加服务器私钥文件
```

**方式二：浏览器导出密钥**
```bash
# 设置环境变量，浏览器会导出会话密钥
export SSLKEYLOGFILE=/tmp/sslkeys.txt

# Wireshark 中配置
编辑 → 首选项 → Protocols → TLS → (Pre)-Master-Secret log filename
```

---

## 七、统计分析功能

### 1. 协议分级统计

```
统计 → Protocol Hierarchy
显示各协议占比，快速了解流量构成
```

### 2. 会话统计

```
统计 → Conversations
- 按 IP/TCP/UDP 分组
- 显示地址对、端口对、数据量
- 右键可过滤特定会话
```

### 3. IO 图表

```
统计 → I/O Graph
可视化流量趋势，支持多过滤条件叠加
```

### 4. 流量图

```
统计 → Flow Graph
显示 TCP 连接时序图，分析连接状态
```

---

## 八、命令行工具

### tshark（命令行版本）

```bash
# 基本捕获
tshark -i en0

# 指定过滤
tshark -i en0 -f "port 80"

# 输出特定字段
tshark -i en0 -Y "http.request" -T fields -e http.host -e http.request.uri

# 读取 pcap 文件
tshark -r capture.pcap -Y "tcp.port == 80"

# 导出 JSON
tshark -r capture.pcap -T json > output.json

# 统计分析
tshark -r capture.pcap -q -z conv,tcp
```

### editcap（编辑 pcap 文件）

```bash
# 切分文件
editcap -c 1000 capture.pcap split_

# 时间范围切片
editcap -A "2024-01-01 00:00:00" -B "2024-01-01 01:00:00" in.pcap out.pcap
```

### mergecap（合并 pcap 文件）

```bash
mergecap -w merged.pcap file1.pcap file2.pcap
```

---

## 九、最佳实践

### 1. 性能优化

- 捕获前设置过滤器，减少数据量
- 大文件使用环形缓冲区（自动切分）
- 使用 `tcpdump` 远程捕获，本地分析

### 2. 定期保存

```bash
# 环形缓冲区，每 100MB 或 1 小时切换文件
捕获 → 选项 → 环形缓冲区
```

### 3. 配置文件

```
~/.config/wireshark/preferences          # 全局配置
~/.config/wireshark/profiles/           # 多配置文件
```

### 4. 色彩规则

```
视图 → 着色规则
- TCP RST: 红色
- TCP SYN: 蓝色
- HTTP 200: 绿色
- HTTP 40x/50x: 红色
```

---

## 十、相关工具

| 工具 | 说明 |
|------|------|
| tcpdump | 命令行抓包工具，轻量级 |
| tshark | Wireshark 命令行版本 |
| Zeek/Bro | 网络安全监控，自动化分析 |
| NetworkMiner | 自动提取流量中的文件 |
| Colasoft Packet Builder | 数据包构造工具 |

---

## 十一、学习资源

- 官方文档：https://www.wireshark.org/docs/
- 显示过滤器参考：https://www.wireshark.org/docs/dfref/
- Wireshark University：https://www.wireshark.org/training/
- SharkFest 会议视频：https://www.youtube.com/user/wiresharktraining