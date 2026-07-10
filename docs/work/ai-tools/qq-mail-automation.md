---
title: QQ 邮箱自动化
date: 2026-05-26
tags:
  - Python
  - Playwright
  - 自动化
  - QQ邮箱
---

# QQ 邮箱自动化：Playwright 登录与未读邮件抓取

> 用 Playwright 自动登录 [wx.mail.qq.com](https://wx.mail.qq.com)，抓取未读邮件列表并输出 JSON。QQ 邮箱需 `--headed` 模式应对验证码，会话可复用。

## 背景

需求：自动打开 QQ 邮箱网页、输入账号密码、进入收件箱，返回未读邮件列表供后续程序使用。

目标登录页：

```
https://wx.mail.qq.com/?cancel_login=true&from=get_ticket_fail
```

## 方案选型

| 方案 | 优点 | 缺点 |
|------|------|------|
| **Playwright 浏览器自动化** | 无需 IMAP 授权码；与网页行为一致 | 需处理验证码；页面改版要维护选择器 |
| **IMAP 协议** | 稳定、适合定时任务 | QQ 邮箱需开启 IMAP 并使用[授权码](https://help.mail.qq.com/detail/108/1023)，不能用 QQ 登录密码 |
| **QQ 邮箱 App 扫码** | 安全 | 无法全自动 |

**最终选择**：Playwright + 有界面浏览器（`--headed`）+ 会话目录复用。

## 项目结构

```
email-scraper/
├── fetch_unread_emails.py   # 主脚本
├── providers.py             # 各邮箱登录配置
├── requirements.txt
├── .env.example
└── unread.json              # 运行输出
```

源码路径：`/Users/hushaofeng/Desktop/code/email-scraper/`

## 关键步骤

### 1. 安装依赖

```bash
cd email-scraper
pip install -r requirements.txt
python3 -m playwright install chromium
```

### 2. 运行（QQ 邮箱）

```bash
python3 fetch_unread_emails.py \
  --provider qq \
  --username 你的邮箱@qq.com \
  --password '你的密码' \
  --headed \
  --profile-dir ~/.qq-mail-profile \
  -o unread.json
```

::: tip 参数说明
- `--headed`：**必需**。QQ 邮箱常弹出验证码，无头模式基本无法通过
- `--profile-dir`：保存浏览器会话，首次登录后通常可复用
- `--limit 20`：最多返回未读数量（默认 20）
:::

### 3. 环境变量（推荐）

```bash
cp .env.example .env
# 编辑 EMAIL_USERNAME / EMAIL_PASSWORD / EMAIL_PROFILE_DIR

python3 fetch_unread_emails.py --headed --profile-dir ~/.qq-mail-profile
```

### 4. 输出格式

```json
{
  "provider": "QQ邮箱 (wx.mail.qq.com)",
  "username": "xxx@qq.com",
  "unread_count": 20,
  "emails": [
    {
      "subject": "邮件主题",
      "sender": "",
      "date": "",
      "unread": true
    }
  ],
  "fetched_at": "2026-05-26 12:57:17"
}
```

## 技术要点

### 登录流程（wx.mail.qq.com）

1. 打开登录页，点击 **「QQ登录」** tab（`#qqLoginTab`）
2. 登录表单嵌套在多层 iframe 中，最终在 `ptlogin2.qq.com` 框架内
3. 输入框 `#u`（QQ 号，不含 `@qq.com`）和 `#p`（密码）
4. 因 iframe 元素不可见，使用 **JavaScript 注入**填表并点击登录

```python
login_frame.evaluate("""
    (args) => {
        document.querySelector('#u').value = args.u;
        document.querySelector('#p').value = args.p;
        document.querySelector('#login_button').click();
    }
""", {"u": qq_num, "p": password})
```

5. 登录成功后经 `login_jump.html` 跳转到邮箱主页

### 未读邮件抓取

- 优先监听页面 **API 响应**（JSON 中含 `subject` 等字段）
- 备用：DOM 选择器解析邮件列表行
- 当前版本：**主题**抓取正常；发件人/日期待优化

## 踩坑记录

### 1. 无头模式登录失败

- **现象**：`headless=True` 时登录超时，停留在登录页
- **原因**：腾讯检测自动化浏览器，且常需验证码
- **解决**：使用 `--headed`；启动参数 `--disable-blink-features=AutomationControlled`

### 2. iframe 内元素不可见

- **现象**：`Frame.fill: element is not visible`
- **原因**：QQ 登录框在嵌套 iframe 中，Playwright 认为不可交互
- **解决**：`frame.evaluate()` 直接操作 DOM

### 3. IMAP 无法用 QQ 密码

- **现象**：`Login fail. Account is abnormal...`
- **原因**：QQ 邮箱 IMAP 需要独立[授权码](https://help.mail.qq.com/detail/108/1023)
- **解决**：走 Playwright 网页登录，或开启 IMAP 后使用授权码

### 4. login_jump 被误判为失败

- **现象**：登录已成功但脚本报超时
- **原因**：`login_jump.html` 是正常中间跳转页
- **解决**：等待逻辑排除 `cancel_login=true`，允许经过 `login_jump`

## 验证结果（2026-05-26）

| 项目 | 结果 |
|------|------|
| 登录 | 成功 |
| 未读邮件 | 20 封（默认 limit） |
| 耗时 | ~56 秒 |
| 会话复用 | `~/.qq-mail-profile` |

部分抓取到的主题示例：

- 《给阿嬷的情书》爆火：人与人之间最长久的关系，是相互报恩
- 【反弹Shell安全事件提醒】云安全中心安全团队，请您重点关注
- 【阿里云】云安全中心周报
- 广发信用卡 2026年05月电子账单

## 结论与建议

1. **QQ 邮箱自动化首选 Playwright + headed 模式**，并接受首次可能需要手动过验证码
2. **务必使用 `--profile-dir`**，减少重复登录
3. **密码不要写在命令行或 Git 中**，用 `.env` 管理
4. 若需 **7×24 定时任务**，长期更稳的是 IMAP + 授权码方案
5. 发件人/日期字段可后续通过分析 API 响应结构补全

## 相关链接

- [QQ 邮箱登录页](https://wx.mail.qq.com/?cancel_login=true&from=get_ticket_fail)
- [QQ 邮箱 IMAP 授权码说明](https://help.mail.qq.com/detail/108/1023)
- [Playwright 文档](https://playwright.dev/python/)
- 源码：`/Users/hushaofeng/Desktop/code/email-scraper/`
