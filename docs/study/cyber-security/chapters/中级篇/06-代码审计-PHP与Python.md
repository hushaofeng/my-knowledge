---
title: 代码审计 · PHP 与 Python
date: 2026-09-03
tags: [网络安全, 中级]
---

# 06 · 代码审计 PHP 与 Python——弱类型与"危险的一句话"

> PHP 统治存量 Web（审计市场最大）；Python 统治新工具链（你的主战场）。两章并一章，各给一张"坑表"+ 一套 Checklist。

## 🎯 学习目标

1. 熟练运用 PHP 弱类型比较表识别绕过点
2. 记全 PHP 危险函数家族（按类别）
3. 说清 pickle 反序列化为什么"天然就是 RCE"
4. 产出一套可复用的双语言审计 Checklist

## 📖 核心知识

### 6.1 PHP 弱类型坑表（== 的陷阱）

| 表达式 | 结果 | 利用场景 |
|---|---|---|
| `0 == "abc"` | true（历史版本） | 数字参数传字符串绕过 |
| `"1e3" == "1000"` | true | 科学计数法绕数值校验 |
| `"0e123" == "0e456"` | true | **科学计数法哈希碰撞**（0e 开头=0） |
| `null == false == 0` | true | 未初始化变量绕过 |
| `"123abc" == 123` | true | 截断转换绕过 |

经典题：`if (md5($a) == md5($b) && $a != $b)` → 找两个 `0e...` 开头的 MD5（全部解析为 0）即过。

### 6.2 PHP 危险函数家族

| 家族 | 函数 | 危害 |
|---|---|---|
| 命令执行 | system/exec/shell_exec/passthru/\`\`/popen | RCE |
| 代码执行 | eval/assert/create_function/preg_replace(/e) | RCE |
| 文件操作 | include/require/file_get_contents/fopen | LFI/RFI/读文件 |
| 上传 | move_uploaded_file+扩展名校验缺陷 | webshell |
| 反序列化 | unserialize（__destruct/__wakeup 魔术方法链） | 依赖库 gadget |
| SSRF | curl_exec/file_get_contents(http) | 内网 |

审计口诀：**grep 危险函数 → 回溯参数来源 → 判断过滤强度**（与 Java 审计同构）。

### 6.3 PHP 审计实战框架

1. 路由/入口梳理（框架类：`routes.php` 或注解）
2. 全局过滤点识别（`addslashes`/框架 GPC/自定义 filter）——**绕过点=过滤薄弱的边界**
3. 危险函数 grep → 逐个回溯
4. 特别关注：`$$var`（可变变量覆盖）、`extract()`（变量注入）、`unserialize` 入口

### 6.4 Python 特有面

**SSTI**（中级篇 03 已详解）与 **pickle 反序列化**：

```python
import pickle
pickle.loads(user_bytes)   # ← 天然 RCE：pickle 协议支持 REDUCE 操作码
#攻击者构造 __reduce__ 返回 (os.system, ('命令',))——恢复时直接执行
```

为什么 pickle 比 Java 反序列化"更直白"：pickle 协议**设计上就允许序列化"如何构造对象"的指令**，`__reduce__` 就是"对象 + 调用参数"。防御：**永远不要 loads 不可信数据**，换 JSON。

**Flask 调试 PIN**：debug 模式下 Werkzeug 控制台 PIN 由机器特征（MAC/用户名/machine-id 等）计算——泄露任意文件读即可算出 PIN，debug=生产事故。

**eval/exec**：任何"把字符串当代码"的入口都是 RCE；审计 grep `eval(|exec(|__import__`。

### 6.5 双语言审计 Checklist（模板）

```
[ ] 入口清单完整（路由/CLI/cron/消息消费者）
[ ] 输入点标注（参数/Cookie/头/文件名/JSON 字段）
[ ] 过滤边界图（全局过滤/局部过滤/无过滤）
[ ] 危险汇点 grep 清单（本语言家族表）
[ ] 逐汇点数据流回溯（source→sink 路径图）
[ ] 认证/授权检查（越权测试点）
[ ] 依赖版本 vs 已知 CVE（pip list/mvn tree 对照）
[ ] 结论：PoC+数据流图+修复建议
```

## 🔬 动手实操

1. 本地复现 `0e` MD5 绕过（写 10 行 PHP 验证脚本）
2. 用 Docker 跑一个小型 PHP 开源系统（如永恒蓝类靶场），按 6.5 清单做一次完整审计
3. Python 侧：写一个 `pickle.loads` 演示（自建对象 + `__reduce__`），在本地理解"为什么不能 loads 不可信数据"

## ⚠️ 常见坑

1. PHP 8 后部分弱类型行为改变（`0=="abc"` 为 false）——**先确认目标版本再下结论**
2. 只盯 eval/system——include/unserialize 才是存量系统的主流入口
3. Python 觉得"类型安全"就没审计价值——pickle/eval/SSTI 全是 RCE 级
4. 框架审计跳过框架本身的已知漏洞（ThinkPHP/Flask 历史洞）
5. Checklist 一次不用——审计的工程化就靠它

## ✅ 自测题

<details>
<summary>1. "0e123" == "0e456" 为什么为 true？</summary>

PHP == 比较时两者都符合科学计数法格式，被解析为浮点 0*10^123 == 0*10^456 = 0 == 0。用于绕"两个不同字符串但 MD5 相等"类校验（用 0e 开头的 MD5 碰撞串）。

</details>

<details>
<summary>2. PHP 反序列化的攻击入口为什么是魔术方法？</summary>

unserialize 恢复对象时会自动触发 __wakeup/__destruct 等生命周期方法；gadget 链借这些"自动调用点"启动，后续环靠类内自定义逻辑衔接。

</details>

<details>
<summary>3. pickle 为什么比 JSON 危险？</summary>

JSON 只表达数据；pickle 协议可表达"构造对象的指令"（REDUCE 操作码），loads 时执行任意可调用对象——数据与代码未分离。

</details>

<details>
<summary>4. Flask debug 模式的生产风险链？</summary>

任意文件读（LFI/SSRF 组合）→ 读取 machine-id/MAC/用户名 → 计算 Werkzeug PIN → 访问 /console 得到交互式 Python 控制台 → RCE。生产必须关 debug。

</details>

<details>
<summary>5. 审计中"过滤边界图"指什么？</summary>

标出全局过滤（GPC 转义/WAF/框架中间件）作用与失效条件，找"局部漏网"——漏洞几乎都在过滤覆盖的接缝处。

</details>

## 🔗 对应周任务与资源

- **W73-W76**；资源：《代码审计：企业级Web代码安全架构》、PHP 官方类型比较表、Pickle 文档"安全警告"节
