---
title: CTF 入门
date: 2026-09-03
tags: [网络安全, 初级]
---

# 06 · CTF 入门——合法的"实战手感"来源

> CTF 是攻防技能唯一合法的"无限量"练习场。目标不是打比赛名次，而是用题目把前面五章的知识**串成条件反射**。

## 🎯 学习目标

1. 说出五大题型的技能需求与你的主攻优先级
2. 独立完成一道 Web 题的完整 Writeup
3. 建立"从提示到 payload"的解题反射
4. 制订 30 天刷题路线并执行

## 📖 核心知识

### 6.1 题型地图（结合你的背景排优先级）

| 题型 | 技能需求 | 对你的难度 | 优先级 |
|---|---|---|---|
| Web | HTTP/OWASP/PHP 特性 | 低（有代码底子） | ⭐⭐⭐⭐⭐ 主攻 |
| Misc | 隐写/编码/流量分析 | 低-中 | ⭐⭐⭐⭐ 次攻 |
| Crypto | 数论/编码/现成库 | 中 | ⭐⭐⭐ 跟进 |
| Reverse | 汇编/逆向工具 | 高（新领域） | ⭐⭐ 后置 |
| Pwn | 汇编/内存/OS | 最高 | ⭐ 第 2 年再碰 |

### 6.2 解题方法论（反射训练）

```
看到 URL/页面
  1. 信息收集：源码注释? robots.txt? .git/.svn? 备份文件(index.php.bak)?
  2. 指纹识别：什么框架/语言/中间件（响应头/报错页/图标）
  3. 参数面：所有输入点（GET/POST/Cookie/Header）逐一标记
  4. 漏洞匹配：参数类型 ↔ 漏洞族（数字→注入? 文件名→上传/包含? 渲染→XSS/SSTI?）
  5. 利用与调参：改 payload、看响应差异（回显/时间/长度）
  6. flag：不是终点——写 Writeup 才是
```

### 6.3 Writeup 标准写法（示例：robots.txt 泄露题）

```markdown
## 题目：Web_01（100pt）

### 信息收集
- 首页无异常；查看 /robots.txt：
  Disallow: /f1ag_1s_h3re.html
### 利用
- 直接访问 /f1ag_1s_h3re.html → 页面注释中有 flag
### 知识点
- robots.txt 是给搜索引擎的"访客止步"清单，默认公开——反而成了路标
### 反思
- 信息收集永远先看"公开就能拿到"的东西，再上工具
```

公式：**信息收集 → 利用过程 → 知识点 → 反思**。反思段是给你自己三个月后看的。

### 6.4 工具清单表

| 类别 | 工具 |
|---|---|
| 代理抓包 | Burp Suite |
| 目录爆破 | dirsearch / 自研（第 4 模块产出） |
| 编解码 | CyberChef（神器）、base64/rot13/URL |
| 编码脚本 | Python 一把梭（你已有的优势） |
| 题库 | 攻防世界、Bugku、PicoCTF |

### 6.5 新手 30 天刷题路线

| 天 | 任务 |
|---|---|
| 1-5 | 攻防世界新手区：view_source / robots / backup / cookie / disable_cache |
| 6-10 | 新手区：简单 SQLi ×3、XSS ×2（全部手工，禁 sqlmap） |
| 11-15 | Bugku Web：302 跳转、头信息伪造、程序员本地网站 |
| 16-20 | Misc 入门：图片隐写（binwalk/strings/stegsolve）×5 |
| 21-25 | Crypto 入门：摩斯/Base 全家桶/栅栏/凯撒 ×5 |
| 26-30 | 综合复盘：重做最难的 3 题 + 整理 3 篇 Writeup 发布 |

## 🔬 动手实操

注册攻防世界 → 新手区 → 严格按 6.2 方法论做前 3 题，每题产出标准 Writeup，发到知识库 `docs/study/cyber-security/writeups/`。

## ⚠️ 常见坑

1. 直接搜 flag/看题解——大脑跳过了建立反射的关键步骤
2. 只刷 Web 不碰 Misc——Misc 练的是"信息敏感度"，全题型通用
3. Writeup 只写 payload 不写思路——三个月后你自己都看不懂
4. 攻击性 payload 对着非靶场地址试——CTF 平台的题目地址才是授权范围
5. 贪多求快——30 题吃透 > 100 题打卡

## ✅ 自测题

<details><summary>1. 为什么robots.txt 常成为 Web 题突破口？</summary>
它本身公开可读，但列出的 Disallow 路径=站长不想被看到的敏感目录清单，直接变成攻击者路标。
</details>

<details><summary>2. Web 题里"参数类型↔漏洞族"怎么匹配？</summary>
数字 ID→SQL 注入（数字型）；文件名/路径→上传/包含/遍历；内容渲染→XSS/SSTI；URL 参数→SSRF；Cookie/JWT→越权与会话缺陷。
</details>

<details><summary>3. Writeup 中"反思"为什么重要？</summary>
把单题经验抽象成可迁移的模式（如"先看公开信息再上工具"），这是从做题者到工程师的分水岭。
</details>

<details><summary>4. Misc 题对 Web 手的帮助是什么？</summary>
训练信息敏感度与工具箱广度（strings/binwalk/file），Web 题里的图片/附件/流量包全靠这套基本功。
</details>

<details><summary>5. 为什么禁 sqlmap 刷新手题？</summary>
新手题的 payload 都能手工构造；先手工建立"注入是什么"的肌肉记忆，工具才有正确的使用场景（省时间而非替你思考）。
</details>

## 🔗 对应周任务与资源

- 对应计划：**第1年 W18-W21、W41**；资源：CTF Wiki（ctf-wiki.org）、攻防世界、PicoCTF
