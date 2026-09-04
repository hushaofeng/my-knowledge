---
title: Burp 进阶与逻辑漏洞
date: 2026-09-03
tags: [网络安全, 中级]
---

# 02 · Burp 进阶与逻辑漏洞——扫描器照不亮的角落

> 工具箱熟练度决定你的下限；**逻辑漏洞**决定你的上限——它没有 payload 库，只有"业务理解 + 人的直觉"。这恰是资深工程师最锋利的刀。

## 🎯 学习目标

1. Intruder/Repeater/Comparer 组合成"测试流水线"
2. 写出第一个 Burp 插件（Python/Jython）
3. 掌握四大逻辑漏洞族的测试 checklist
4. 用 PortSwigger Academy 专题验证学习

## 📖 核心知识

### 2.1 模块组合拳

| 场景 | 组合 |
|---|---|
| 参数爆破 | 拦截请求 → Send to Intruder → 狙击位+字典 → 按长度/状态码过滤 |
| 响应对比 | Repeater 改两个版本 → Comparer diff → 找行为差异 |
| 越权测试 | 两个账号各抓一份请求 → 互换身份标识 → 看谁的资源被谁读到 |
| 会话分析 | Sequencer 看 Token 熵（是否可预测） |

**Intruder 攻击模式**：Sniper（单变量逐值）、Cluster bomb（多变量笛卡尔积——用户名×密码爆破用）、Pitchfork（多变量同步走两字典）。

### 2.2 逻辑漏洞四大族（人工测试 checklist）

**① 越权（IDOR/权限缺陷）**
- 水平：把 `/order/1001` 的 ID 换成 1002（另一个用户的）
- 垂直：普通用户直接请求 `/admin/users` 的接口
- Checklist：枚举所有"带 ID 的接口"→ 两账号互测 → 注意 **Cookie 与 Body 里的身份标识不一致**的接口（后端信任了 Body）

**② 支付/数量逻辑**
- 数量负数/超大数、单价前端算总价（后端不重算）、优惠券叠加、并发重复核销
- Checklist：改数量为 0/-1/1e10 → 改币种/单位 → 抓"下单"与"支付"两次请求分别篡改 → 重放支付回调

**③ 验证码/认证逻辑**
- 验证码前端校验/不失效/可复用/万能码；短信轰炸（无频控）；找回逻辑（token 可枚举、改 step 直达）
- Checklist：错 5 次看是否锁定 → 抓验证码请求看返回体 → 手改流程序号

**④ 业务流程跳步**
- 未支付直接进发货回调、多步骤流程跳到最后一 步
- Checklist：把流程请求"乱序重放"，观察状态机是否校验前置状态

### 2.3 Burp 插件最小可用（Jython/Python）

```python
# 高亮含敏感参数的请求（Burp Extender 概念示例）
from burp import IBurpExtender, IScannerCheck
from java.util import List, ArrayList

class BurpExtender(IBurpExtender):
    def registerExtenderCallbacks(self, callbacks):
        self._cb = callbacks
        self._helpers = callbacks.getHelpers()
        callbacks.setExtensionName("Sensitive Param Highlight")
        callbacks.registerScannerCheck(self)

    def doPassiveScan(self, requestResponse):
        info = self._helpers.analyzeRequest(requestResponse)
        params = info.getParameters()
        SENSITIVE = ["id", "uid", "order_id", "price", "amount", "token"]
        for p in params:
            if p.getName().lower() in SENSITIVE:
                # 高亮该请求，提醒人工做越权/篡改测试
                self._cb.addScanIssue(.../*.buildIssue(...*/)   # 简化示意
        return None
```

工程价值：把"要人工检查的接口"自动标出——你的工具思维直接复用。

### 2.4 PortSwigger Academy（免费顶级靶场）

对应专题：Authentication / Authorization / Business logic vulnerabilities——每个 lab 都是"逻辑漏洞是什么"的教科书，做 6 个 lab ≈ 读懂一个漏洞族。

## 🔬 动手实操

DVWA 里手工构造越权场景：开两个浏览器 Profile 登录两个账号，互换请求中的身份参数，观察行为——**这就是 IDOR 的一切**。

## ⚠️ 常见坑

1. 只盯高危技术漏洞，逻辑漏洞"嫌麻烦"——真实 SRC 里逻辑漏洞占比极高
2. 越权测试只改 URL 参数——Body/Cookie/Header 里的身份标识都要换
3. 逻辑测试无节制打真实用户数据——**授权测试也要最小影响**
4. Intruder 一开 200 线程——先测频控，尊重范围规则
5. 插件一上来追求复杂——先把"高亮+日志"跑通

## ✅ 自测题

<details><summary>1. IDOR 的本质缺陷是什么？</summary>
后端用"客户端提供的标识"定位资源，却不校验"该标识是否属于当前认证主体"——对象级授权缺失（BOLA）。
</details>

<details><summary>2. 如何系统性发现越权点？</summary>
枚举全部带资源标识的接口 → 建双账号矩阵 → 逐接口互换标识 → 记录"应拒绝未拒绝"清单。
</details>

<details><summary>3. 支付篡改测试要先看什么？</summary>
金额/数量在哪一层计算（前端算好传入=高危信号）、后端是否重算、是否有签名/对账兜底。
</details>

<details><summary>4. 为什么逻辑漏洞扫描器扫不出来？</summary>
逻辑 = 业务规则（"这个用户不该看那个订单"），没有通用特征；只有理解业务的人才能判断"合理与否"。
</details>

<details><summary>5. SameSite 能否替代 CSRF Token？</summary>
能防大部分跨站场景，但同站子域、顶级导航 GET 等路径仍可绕；高价值操作建议 Token+SameSite 双保险。
</details>

## 🔗 对应周任务与资源

- **W57-W60**；资源：PortSwigger Academy（Business logic / Authorization 专题）、Burp 官方 Extender 文档
