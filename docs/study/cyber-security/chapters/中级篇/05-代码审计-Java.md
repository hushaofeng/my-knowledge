---
title: 代码审计 · Java
date: 2026-09-03
tags: [网络安全, 中级]
---

# 05 · 代码审计 Java——20 年功底的变现章

> 别人审计 Java 要先学三个月语言；你直接从"调用链"开打。本章目标：建立**数据流回溯**的方法论 + 吃透反序列化这条最经典的链。

## 🎯 学习目标

1. 画出 Java 反序列化的调用链原理图
2. 逐环讲清 CommonsCollections1 链为什么成立
3. 掌握"路由表→危险函数→回溯"审计工作流
4. 用补丁 diff 法分析一个历史 CVE

## 📖 核心知识

### 5.1 反序列化原理：readObject 就是"另一个 eval"

```java
ObjectInputStream ois = new ObjectInputStream(inputStream);
Object obj = ois.readObject();   // ← 这行等于把字节流当"代码"执行构造逻辑
```

序列化数据 ≠ 数据——**readObject 会执行被恢复对象的 readObject() 方法**。如果 classpath 里存在"readObject 里有危险动作的类链"，攻击者构造的字节流就能触发任意行为。这就是" gadget chain（利用链）"。

### 5.2 CommonsCollections1 链逐环拆解（教学经典）

```
ObjectInputStream.readObject()
 └─ AnnotationInvocationHandler.readObject()      ← 入口：map 是代理，触发 entrySet()
     └─ DynamicProxy → LazyMap.get()              ← 代理转发到 LazyMap
         └─ ChainedTransformer.transform()        ← LazyMap.get 缺 key 时触发转换器链
             ├─ ConstantTransformer(Runtime.class)      恒定返回 Runtime 类
             ├─ InvokerTransformer.getMethod("getRuntime")  反射拿方法
             ├─ InvokerTransformer.invoke(...)          反射调用 → Runtime 对象
             └─ InvokerTransformer.exec("calc.exe")     执行命令
```

理解三件事：
1. **InvokerTransformer 是"反射任意调用"的通用积木**（getName/invoke 参数可控）
2. **ChainedTransformer 把积木串起来**，上一环输出=下一环输入
3. **入口找一个"readObject 时会自动调用 map.get()"的类**——AnnotationInvocationHandler

漏洞修复史：CommonsCollections 3.2.2 移除危险序列化支持 → JEP 290 序列化过滤（白名单机制）。**防御答案=过滤+减少 classpath 的 gadget 面**。

### 5.3 Spring/Struts 的 CVE 模式归纳

| 模式 | 原理 | 代表 |
|---|---|---|
| SpEL 注入 | 用户输入进 SpEL 表达式上下文 | Spring Data Commons RCE |
| OGNL 注入 | Struts 把输入当 OGNL 执行 | S2-045（Content-Type 触发） |
| 反序列化 | 接口直接 readObject | 各类中间件 |
| 路径遍历/下载 | 文件名未归一化 | 各类 /download?file= |
| SSRF/URL 拼接 | 服务端请求可控 URL | 各类 webhook 功能 |

### 5.4 补丁 diff 阅读法（你的天赋区）

流程：CVE 公告 → GitHub 找 fix commit → 只看 diff 的**语义**：
- 新增了 `if`/校验 → 原代码缺什么检查（这就是漏洞本质）
- 类型变化（String→URI）→ 原来的解析被利用了
- 加了 try/白名单 → 被绕过的边界在哪

示例思维：某个 fix 加了 `filename.replaceAll("\\.\\./", "")` → 说明原版本路径遍历，且**编码绕过（..%2f）当时没覆盖**——这就是 1-day 的切入点。

### 5.5 审计工作流（从零审一个开源 Java CMS）

```
1. 跑起来：docker/本地启动，抓路由表（Controller @RequestMapping 清单）
2. 列危险汇点：
   Runtime.exec / ProcessBuilder / JNDI lookup(InitialContext)
   readObject / XMLDecoder / SpEL(parseExpression) / JDBC 拼接 / new File(userInput)
3. 逐个回溯：汇点参数 ← 谁传入 ← 一路追到 Controller 入参（数据流回溯）
4. 可达性判断：有没有权限门槛/编码过滤挡在中间
5. 写 PoC（本地复现）→ 审计报告（漏洞+数据流图+修复建议）
```

工具辅助：IDEA 的 Find Usages、CodeQL、Grep 危险函数——但**判断"可达性"只能人脑**。

## 🔬 动手实操

1. Maven 起一个带 commons-collections 3.1 的本地靶场，构造 CC1 链打本地（教学复现）
2. 选一个开源 Java CMS（如若依类）跑通 5.5 流程，产出第一份审计报告

## ⚠️ 常见坑

1. 背链不解链——面试/实战考的是"每环为什么成立"
2. 只看危险函数不回溯——没有数据流的"危险函数"大多不可达
3. 忽略 classpath——gadget 存在与否取决于依赖树（`mvn dependency:tree` 是审计起点）
4. JEP 290 等修复机制不学——现代环境绕不过
5. 审计结论不写 PoC——不可复现的发现等于没有

## ✅ 自测题

<details>
<summary>1. 为什么说 readObject "等于另一个 eval"？</summary>

它会执行恢复对象的 readObject() 定义逻辑，攻击者可通过字节流选择"执行哪条已存在于 classpath 的构造链"，数据即代码。

</details>

<details>
<summary>2. CC 链中 InvokerTransformer 的角色？</summary>

反射任意调用的通用积木：构造时指定 方法名/参数类型/参数值，transform 时对输入对象 invoke——把"字符串描述的方法调用"变成真实执行。

</details>

<details>
<summary>3. JEP 290 防御了什么？</summary>

序列化过滤：反序列化时按白名单/黑名单校验即将恢复的类，不在名单内直接拒绝——从根上限制 gadget 的可达类集合。

</details>

<details>
<summary>4. 补丁 diff 里看到"新增正则过滤 ..\."，推断什么？</summary>

原版本存在路径遍历且当前只修了字面 ../——结合历史绕过经验可测 URL 编码（..%2f）、双重编码等 1-day 变体。

</details>

<details>
<summary>5. 审计报告里"数据流图"的价值？</summary>

把"source（用户输入）→ sink（危险函数）"的路径显式化，让修复者精确定位该在哪一层拦（入口校验/汇点白名单），也是漏洞可信度的证明。

</details>

## 🔗 对应周任务与资源

- **W69-W72**；资源：ysoserial 源码阅读、《Java 代码审计入门》、CodeQL 官方教程
