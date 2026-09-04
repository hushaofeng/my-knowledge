---
title: Linux 与命令行
date: 2026-09-03
tags: [网络安全, 初级]
---

# 02 · Linux 与命令行——安全人的手术台

> 目标不是"会用 Linux"，而是建立**权限敏感度**：看到任何文件/进程/端口，本能地问"谁能读写执行它，这意味着什么"。

## 🎯 学习目标

1. 手算任意权限位（755/4755/2770），说清 SUID/SGID/Sticky 的实际效果
2. 用一条管道命令从 access.log 统计出 TOP IP / 状态码 / 可疑 UA
3. 说清 nmap 四种扫描的原理差异与适用场景
4. Bandit 0-10 通关

## 📖 核心知识

### 2.1 权限位深入（安全的核心是权限）

```
-rwsr-xr--  1  root  dev  1204  deploy.sh
│ └┬┘└┬┘└┬┘
│  │  │  └─ other: r-- (4)
│  │  └──── group: r-x (5)
│  └─────── owner: rws (7 = 4+2+1 + SUID)
└─ 文件类型 (- 文件, d 目录, l 链接)
```

**特殊位**（安全重点）：

| 位 | 数字 | 出现位置 | 效果 | 安全意义 |
|---|---|---|---|---|
| SUID | 4 | owner 的 x 位 | 执行者临时获得**文件属主**权限 | `find / -perm -4000` 是提权排查第一步 |
| SGID | 2 | group 的 x 位 | 执行者获得属组权限/目录继承组 | 目录协作+提权面 |
| Sticky | 1 | other 的 x 位 | 仅属主可删自己的文件 | /tmp 的保护机制 |

**小实验（本地虚拟机）**：
```bash
cp /bin/cat /tmp/mycat && sudo chmod u+s /tmp/mycat   # 仅实验环境！
ls -l /tmp/mycat        # -rwsr-xr-x
sudo find / -perm -4000 -type f 2>/dev/null   # 全盘 SUID 清单——提权排查标准动作
```

### 2.2 用户 / 进程 / 服务

```bash
id                        # 我是谁、在哪些组（组=权限包）
ps aux --sort=-%mem | head # 资源视角看进程
sudo ss -tlnp              # 谁在监听端口（安全排查第一命令）
systemctl list-units --type=service --state=running
```

应急排查本能三连：**奇怪的监听端口 → 陌生的进程路径 → 异常的定时任务**（`crontab -l && ls /etc/cron*`）。

### 2.3 bash 管道：日志分析实战

任务：从 nginx access.log 找出"最可疑的家伙"。

```bash
# TOP 10 访问 IP
awk '{print $1}' access.log | sort | uniq -c | sort -rn | head

# 非 200/304 的请求分布（探针行为信号）
awk '{print $9}' access.log | sort | uniq -c | sort -rn

# 疑似扫描器 UA
awk -F'"' '{print $6}' access.log | sort | uniq -c | sort -rn | grep -iE 'sqlmap|nikto|nmap|python|curl'

# 找路径遍历尝试
grep -E '\.\./|%2e%2e' access.log | awk '{print $7}' | sort -u | head
```

工程师心法：管道 = 函数式数据流，你在别的语言里天天写 map/filter/reduce——这就是 shell 版。

### 2.4 nmap 四种扫描的原理

| 参数 | 名称 | 原理 | 特点 |
|---|---|---|---|
| `-sS` | SYN 扫描 | 发 SYN 收 SYN/ACK 后**不发 ACK**直接 RST | 半开连接，快、隐蔽（默认需 root） |
| `-sT` | 全连接 | 完整三次握手 | 无需特权，日志里最显眼 |
| `-sV` | 版本探测 | 探针交互，比对指纹库 | 确认服务版本（CVE 匹配的基础） |
| `-O` | OS 探测 | TCP/IP 栈指纹（TTL/窗口大小） | 精度一般，参考用 |

```bash
nmap -sS -sV -p 1-1000 --top-ports 100 192.168.56.101   # 仅限自家虚拟机
```

安全视角：`-sS` 为什么"隐蔽"？目标服务的应用层日志**不会**记录这次连接（连接从未建立），只有防火墙能看到 SYN——这就是"扫描器在应用日志里隐身"的原因。

### 2.5 Bandit 0-10 通关思路（不剧透）

| 关 | 考察 | 思考方向 |
|---|---|---|
| 0→1 | ssh 基础 | 读当前目录文件 |
| 1→2 | 特殊文件名 | `./-` 前缀转义 |
| 2→3 | 空格文件名 | 引号或转义 |
| 3→4 | 隐藏文件 | `ls -la` |
| 5→6 | 按条件找文件 | find 的 -size/-user 组合 |
| 6→7 | 全盘按属主找 | find / -user -group 2>/dev/null |
| 7→8 | 文本中找行 | grep 旁边的词 |
| 8→9 | 唯一行 | sort | uniq -u 组合 |
| 9→10 | 二进制中的文本 | strings + grep |

## 🔬 动手实操

见上文各小实验；每周固定在虚拟机里"破坏并修复"权限：故意 chmod 000 一个服务要用的文件，观察报错，修复，理解依赖链。

## ⚠️ 常见坑

1. `chmod 777` 强迫症——这是把"权限敏感度"清零的头号标志
2. 用 root 日常练习——你永远学不到"最小权限"的肌肉记忆
3. nmap 全端口 `-p-` 无脑扫——先 top-ports 摸底，再精准补扫
4. 把 Bandit 当任务刷——它是"命令肌肉记忆"训练器，做完要能盲打
5. 忽略 `2>/dev/null` 的语义——排查类 find 命令离不开它，但要明白它丢弃的是权限错误

## ✅ 自测题

<details>
<summary>1. 4755 与 0755 的区别？</summary>

4 是 SUID 位：任何用户执行该文件时，进程的 effective UID 变为文件属主（通常 root）——提权排查的核心对象。

</details>

<details>
<summary>2. 为什么 -sS 扫描在目标应用日志里不可见？</summary>

三次握手从未完成（SYN/ACK 后收到 RST），应用进程从未 accept 该连接，应用层日志自然无记录；但网络层设备可见。

</details>

<details>
<summary>3. 一条管道统计 access.log 中 404 最多的 10 个路径？</summary>

awk '$9==404 {print $7}' access.log | sort | uniq -c | sort -rn | head

</details>

<details>
<summary>4. 应急排查"可疑进程"的三步？</summary>

ss -tlnp 找监听 → ps /proc/`<pid>`/exe 看真实路径（注意被删除仍运行的进程显示 (deleted)）→ lsof -p `<pid>` 看它打开的文件与连接。

</details>

<details>
<summary>5. /tmp 为什么要加 Sticky 位？</summary>

让所有人可写（协作需要），但只能删除属于自己的文件——否则任何用户可互删对方文件（早期的 DoS/提权辅助面）。

</details>

## 🔗 对应周任务与资源

- 对应计划：**第1年 W05-W08**；延伸：OverTheWire Bandit、`man nmap`（EXAMPLES 节）
