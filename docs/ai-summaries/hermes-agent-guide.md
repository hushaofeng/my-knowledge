---
title: Hermes Agent 原理与使用建议
date: 2026-07-03
tags:
  - AI Agent
  - Hermes
  - 工具链
  - 自动化
---

# Hermes Agent 原理与使用建议

> Hermes Agent 是 Nous Research 开源的多平台 AI Agent 框架，支持任意 LLM 提供商，通过工具调用实现与系统交互，具备跨会话记忆、技能自学习、定时任务和多平台网关能力。

## 一、核心架构原理

### 1.1 整体架构

```
用户输入 (CLI / Telegram / WeChat / Discord / ...)
    │
    ▼
┌─────────────────────────────────────────────┐
│              Gateway (网关层)                 │
│   多平台适配器，统一消息收发，路由到 Agent      │
└──────────────────┬──────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────┐
│            AIAgent (核心对话循环)              │
│                                              │
│  System Prompt ──► LLM 调用 ──► 工具调度     │
│       ▲                         │            │
│       └───── 工具结果 ←─────────┘            │
│                                              │
│  上下文压缩 (Context Compression)             │
│  记忆注入 (Memory Injection)                 │
│  技能加载 (Skill Loading)                    │
└──────────────────┬──────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────┐
│             工具层 (Tools)                    │
│  terminal / file / browser / web /           │
│  cronjob / delegation / vision / tts ...     │
└─────────────────────────────────────────────┘
```

### 1.2 对话循环 (Agent Loop)

Hermes 的核心是一个 **ReAct 循环**（Reasoning + Acting）：

1. **构建 System Prompt** — 包含角色定义、环境信息、已加载技能、记忆内容
2. **调用 LLM** — 发送 OpenAI 格式的消息 + 工具定义
3. **工具调用** — 如果 LLM 返回 `tool_calls`，调度到对应工具执行，结果追加到消息
4. **文本响应** — 如果 LLM 返回文本，结束循环
5. **上下文压缩** — 接近 token 上限时自动压缩历史消息

关键参数：
- `agent.max_turns` (默认 90)：最大循环次数
- `compression.threshold` (默认 0.50)：上下文使用率超 50% 触发压缩
- `compression.target_ratio` (默认 0.20)：压缩目标 20%

### 1.3 模型路由

Hermes 支持 20+ 提供商，通过统一接口路由：

| 机制 | 说明 |
|------|------|
| Provider | 提供商级别路由（zai / openrouter / anthropic / deepseek...） |
| Credential Pool | 同一提供商可配多个 API Key，自动轮换、熔断 |
| Fallback Providers | 主提供商失败时切换到备用 |
| Auxiliary Models | 辅助任务（视觉、压缩、搜索）独立配置模型 |

### 1.4 四大持久化系统

| 系统 | 作用 | 存储 |
|------|------|------|
| Memory | 跨会话记忆（用户偏好、环境事实） | `~/.hermes/memories/` |
| Skills | 可复用的程序化知识（工作流、踩坑记录） | `~/.hermes/skills/` |
| Cron | 定时任务调度器 | `~/.hermes/cron/jobs.json` |
| Sessions | 会话存储（SQLite + FTS5 全文搜索） | `~/.hermes/state.db` |

### 1.5 工具集 (Toolsets)

工具按功能分组为工具集，可按平台独立启用/禁用：

| 类别 | 工具集 | 说明 |
|------|--------|------|
| 核心 | terminal, file, browser, web | 系统交互四件套 |
| 智能 | delegation, code_execution, vision | 子任务和代码执行 |
| 持久 | memory, cronjob, session_search | 记忆和调度 |
| 通信 | messaging, clarify, tts | 消息和语音 |
| 管理 | skills, todo, kanban | 任务和知识管理 |

### 1.6 Gateway 网关

Gateway 是消息平台到 Agent 的桥梁：

```
微信/Telegram/Discord/Slack/...
    │ (各平台适配器)
    ▼
Gateway (单进程，异步)
    │
    ├── 消息路由 → Agent 实例
    ├── 命令审批 (/approve /deny)
    ├── Cron 调度器 (60s tick)
    ├── 进程监控
    └── Kanban 调度 (多 Agent 协作)
```

平台适配器统一处理：
- 消息格式转换（文本/图片/语音）
- 命令拦截（`/` 开头的斜杠命令）
- 会话绑定（每个聊天窗口一个独立会话）
- 超时管理（`agent.gateway_timeout` 默认 30 分钟）

## 二、数据流与存储

### 2.1 关键路径

```
~/.hermes/
├── config.yaml          # 主配置（模型、工具集、平台参数）
├── .env                 # API Key 和密钥
├── auth.json            # OAuth 令牌和凭据池
├── state.db             # SQLite 会话存储 + FTS5
├── sessions/            # 会话 JSON 快照
├── memories/            # 跨会话记忆文件
├── skills/              # 技能文档（SKILL.md + 附属文件）
├── cron/
│   ├── jobs.json        # 定时任务定义
│   └── output/          # 任务输出
├── logs/                # Gateway 和错误日志
├── scripts/             # Cron 脚本（no_agent 模式）
└── kanban.db            # Kanban 协作板
```

### 2.2 会话生命周期

```
用户消息 → Gateway/CLI
    → 创建/恢复 Session (state.db)
    → 注入 Memory + Skills
    → Agent Loop (多轮工具调用)
    → 响应文本 → 平台适配器 → 用户
    → 保存会话 (state.db + sessions/)
```

## 三、使用建议

### 3.1 Provider 选型建议

| 场景 | 推荐方案 | 原因 |
|------|----------|------|
| 日常对话/编程 | DeepSeek Chat | 性价比高，中文能力强 |
| 复杂推理 | Claude Sonnet / GPT-4o | 推理质量最佳 |
| 低成本批量 | 本地模型 (llama.cpp) | 零 API 成本 |
| 辅助任务 | 配置独立 auxiliary 模型 | 不占用主模型配额 |

**配置示例**（在 `config.yaml` 中）：

```yaml
model:
  default: glm-5.1
  provider: zai

# 辅助视觉模型单独配，避免主模型不支持图片
auxiliary:
  vision:
    provider: deepseek
    model: deepseek-chat
```

### 3.2 Memory 使用建议

Memory 分两层：

| 层 | 目标 | 内容 | 限制 |
|----|------|------|------|
| user | 用户画像 | 名字、角色、偏好、习惯 | 1375 字符 |
| memory | Agent 笔记 | 环境事实、工具技巧、项目约定 | 2200 字符 |

**最佳实践**：
- ✅ 保存：用户偏好、环境事实（OS/工具版本）、项目约定、反复踩的坑
- ❌ 不保存：任务进度、PR号/commit SHA、临时状态
- Memory 会注入每次对话，保持精简，避免浪费 token

### 3.3 Skills 使用建议

Skill 是可复用的程序化知识，格式为 `SKILL.md` + 附属文件：

**何时创建 Skill**：
- 复杂任务成功完成后（5+ 工具调用）
- 发现非显而易见的工作流
- 被用户纠正后学到的正确做法
- 反复执行的常规操作

**Skill 结构**：
```
skills/my-skill/
├── SKILL.md           # 主文档（YAML frontmatter + Markdown）
├── references/        # 参考文档
├── templates/         # 模板文件
├── scripts/           # 脚本
└── assets/            # 其他资源
```

**Skill 加载机制**：
- 匹配到相关 Skill → 自动加载到 System Prompt
- 加载增加 token 消耗，不要创建无用的 Skill
- `created_by: agent` 的 Skill 会被 Curator 自动管理（标记过时 → 归档）

### 3.4 Cron 任务建议

| 模式 | 适用场景 | 说明 |
|------|----------|------|
| Agent 模式 (`no_agent=false`) | 需要推理的任务 | LLM 理解 prompt → 调用工具 → 返回结果 |
| 脚本模式 (`no_agent=true`) | 纯机械任务 | 直接运行脚本，stdout 作为输出 |

**注意事项**：
- Agent 模式需要 LLM API 可用，API 不稳定会超时
- 脚本模式路径必须在 `~/.hermes/scripts/` 下，且不能是符号链接
- Cron 每次运行有 3 分钟硬超时
- `deliver: local` 表示静默运行（无新内容不通知），`deliver: origin` 会推送到聊天

### 3.5 Gateway 多平台建议

- **安全**：生产环境设置 `approvals.mode: smart`，危险命令自动审批低风险的、弹确认高风险的
- **隐私**：开启 `privacy.redact_pii: true` 可脱敏用户 ID 和手机号
- **密钥**：开启 `security.redact_secrets: true` 自动遮蔽工具输出中的 API Key
- **WeChat/iLink**：iLink Bot 身份通常无法接收普通群消息，`WEIXIN_GROUP_POLICY: open` 不保证群聊可用
- **稳定**：macOS 上 Gateway 作为 LaunchAgent 运行，SSH 登出后仍存活

### 3.6 Delegation 子任务建议

| | delegate_task | 终端启动 hermes |
|---|---|---|
| 隔离 | 独立对话，共享进程 | 完全独立进程 |
| 时长 | 分钟级 | 小时/天级 |
| 工具 | 父进程工具子集 | 完整工具访问 |
| 交互 | 不可交互 | 可 PTY 交互 |
| 用途 | 快速并行子任务 | 长时间自主任务 |

**最佳实践**：
- 3 个以内并行子任务 → `delegate_task(tasks=[...])`
- 简单命令 → 直接 `terminal()`
- 长时间任务 → `terminal(background=True, notify_on_complete=True)`

### 3.7 日常维护

```bash
# 检查健康状态
hermes doctor

# 查看组件状态
hermes status --all

# 更新到最新版
hermes update

# 管理 Skills 生命周期
hermes curator status
hermes curator run       # 手动触发 Curator

# 清理旧会话
hermes sessions prune --older-than 30

# 查看使用统计
hermes insights --days 7
```

## 四、常见问题排查

| 问题 | 排查步骤 |
|------|----------|
| 工具不可用 | `hermes tools list` → 启用后 `/reset` |
| 模型不响应 | `hermes doctor` → 检查 API Key → 检查 base_url |
| Gateway 静默 | `tail ~/.hermes/logs/gateway.log` → 检查进程 |
| 记忆不生效 | 确认 `memory.memory_enabled: true` → 新会话才加载 |
| Skill 不加载 | `hermes skills list` → 确认安装 → `/skill name` 手动加载 |
| Cron 超时 | Agent 模式换脚本模式 → 检查 API 稳定性 → 增加 child_timeout |
| 配置不生效 | CLI 需重启 → Gateway `/restart` → 工具变更 `/reset` |
| CLI 找不到 | 确保 `~/.local/bin` 在 PATH → `source ~/.zshrc` |

## 五、相关链接

- 官方文档：https://hermes-agent.nousresearch.com/docs/
- GitHub 仓库：https://github.com/NousResearch/hermes-agent
- Skills 目录：https://hermes-agent.nousresearch.com/docs/reference/skills-catalog
- 本地源码：`~/.hermes/hermes-agent/`
