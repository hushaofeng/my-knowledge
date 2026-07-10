# 2026-06-25 - 检查Hermes hermes dashboard 是否正常- **日期**: 2026-06-25 16:20:14- **模型**: deepseek-v4-flash- **平台**: cli- **Session ID**: 20260625_161938_c832af---## 🙋 User检查Hermes hermes dashboard 是否正常## 🤖 Assistant**Hermes Dashboard 状态：✅ 正常运行**

| 项目 | 状态 |
|------|------|
| Dashboard 网页界面 | ✅ 已启动，端口 9119，返回 HTTP 200 |
| Dashboard 进程 | 3 个进程 (PID 29051, 29060, 29102) |
| Gateway 服务 | ✅ 运行中 (PID 65802, launchd 管理) |
| 核心模型 | ✅ DeepSeek (deepseek-v4-flash)，API Key 已配置 |
| 微信平台 | ✅ 已配置（home channel） |

**注意事项：**
- ⚠️ 微信网关日志显示 `ilinkai.weixin.qq.com` 连接不稳定，可能是网络/DNS 问题导致微信消息轮询间歇性失败
- 其他消息平台（Telegram、Discord、WhatsApp 等）均未配置

**Dashboard 地址：** http://localhost:9119

需要我打开浏览器访问 Dashboard，或者进一步排查微信连接问题吗？