# Hermes Agent + Harness Engineering 课程笔记

## 📹 视频信息

- **标题**：（2026版）这才是B站讲的最好的Hermes Agent+Harness Engineering入门到实战教程
- **作者**：京东架构师诸葛
- **BV号**：BV17rVh6XEPS
- **播放量**：40,994
- **课程总数**：49集
- **链接**：https://www.bilibili.com/video/BV17rVh6XEPS/

---

## 第一部分：Hermes Agent 基础篇

### 第1-2集：Hermes Agent 课程介绍 & 基础入门

#### 核心概念

**Hermes Agent 是什么？**

Hermes Agent 是一个开源的 AI 智能体框架，用于构建具备工具调用能力的 AI 应用。

**核心特性**：
- ✅ 多模型支持（OpenAI、Anthropic、本地模型等）
- ✅ 工具调用能力（终端、浏览器、文件操作等）
- ✅ 多平台集成（微信、Telegram、飞书等）
- ✅ 持久化记忆（Memory 系统）
- ✅ 技能系统（Skills）

**与其他框架对比**：

| 特性 | Hermes | LangChain | AutoGPT |
|------|--------|-----------|---------|
| 易用性 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| 工具生态 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| 生产就绪 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| 本地化支持 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |

**典型应用场景**：
1. 个人助手（日程管理、信息查询）
2. 内容创作（写作、翻译、摘要）
3. 代码辅助（调试、重构、文档生成）
4. 数据分析（报表生成、可视化）

---

### 第3集：Hermes 整体架构

#### 架构层次

```
┌─────────────────────────────────────┐
│         用户交互层                    │
│  (微信/Telegram/飞书/Web/CLI)        │
└─────────────────────────────────────┘
                  ↓
┌─────────────────────────────────────┐
│         Gateway 网关层               │
│  (消息路由、平台适配、权限控制)        │
└─────────────────────────────────────┘
                  ↓
┌─────────────────────────────────────┐
│         Agent 核心层                 │
│  (对话管理、工具调用、记忆系统)        │
└─────────────────────────────────────┘
                  ↓
┌─────────────────────────────────────┐
│         技能层 (Skills)              │
│  (知识库、工具集、插件系统)            │
└─────────────────────────────────────┘
                  ↓
┌─────────────────────────────────────┐
│         模型层                       │
│  (OpenAI/Anthropic/本地模型)         │
└─────────────────────────────────────┘
```

**核心组件说明**：

1. **Gateway（网关）**
   - 负责接收各平台消息
   - 统一消息格式
   - 用户身份识别

2. **Agent Core（核心）**
   - 对话管理（Conversation）
   - 工具调用（Tool Calling）
   - 记忆系统（Memory）

3. **Skills（技能系统）**
   - 可复用的能力模块
   - 支持自定义开发
   - 社区生态丰富

4. **Tools（工具集）**
   - Terminal：终端命令执行
   - Browser：浏览器自动化
   - File：文件读写操作
   - Web：网络请求

---

### 第4集：Hermes 安装指南

#### 系统要求

- Python 3.9+
- Node.js 16+（可选，用于某些工具）
- Git

#### 安装步骤

**方式1：使用 pipx（推荐）**

```bash
# 1. 安装 pipx（如果未安装）
pip install pipx

# 2. 安装 Hermes
pipx install hermes-agent

# 3. 验证安装
hermes --version
```

**方式2：从源码安装**

```bash
# 1. 克隆仓库
git clone https://github.com/nousresearch/hermes.git
cd hermes

# 2. 创建虚拟环境
python -m venv venv
source venv/bin/activate  # Linux/Mac
# 或 venv\Scripts\activate  # Windows

# 3. 安装依赖
pip install -e .

# 4. 安装开发依赖（可选）
pip install -e ".[dev]"
```

**配置文件位置**：

```
~/.hermes/
├── config.yaml        # 主配置文件
├── .env               # 环境变量（API密钥）
├── profiles/          # 多配置文件
│   ├── default/
│   └── work/
└── skills/            # 自定义技能
```

**环境变量配置**：

```bash
# 在 ~/.hermes/.env 中配置
OPENAI_API_KEY=sk-xxx
ANTHROPIC_API_KEY=sk-ant-xxx
OPENROUTER_API_KEY=sk-or-xxx
```

---

### 第5集：Hermes CLI 命令行

#### 常用命令

**启动交互式对话**：

```bash
# 基本启动
hermes

# 指定模型
hermes --model gpt-4

# 使用特定配置文件
hermes --profile work

# 静默模式（适合脚本）
hermes --quiet
```

**配置管理**：

```bash
# 查看当前配置
hermes config list

# 设置配置项
hermes config set model.default gpt-4
hermes config set model.temperature 0.7

# 使用特定编辑器打开配置
hermes config edit
```

**技能管理**：

```bash
# 列出所有技能
hermes skills list

# 安装技能
hermes skills install github-repo-management

# 创建新技能
hermes skills create my-skill

# 查看技能详情
hermes skills view github-repo-management
```

**工具管理**：

```bash
# 查看可用工具
hermes tools list

# 启用/禁用工具
hermes tools enable browser
hermes tools disable terminal
```

---

### 第6集：Hermes 桌面版

#### 功能特点

- 图形化界面，无需命令行
- 实时对话历史查看
- 工具调用可视化
- 配置管理界面

#### 启动方式

```bash
# 启动桌面应用
hermes desktop

# 或直接运行
hermes ui
```

#### 界面说明

**左侧边栏**：
- 对话列表
- 配置切换
- 工具状态

**中间对话区**：
- 消息显示
- 工具调用结果
- Markdown渲染

**右侧面板**：
- 当前使用的模型
- Token统计
- 快捷操作

---

### 第7集：Hermes 接入飞书

#### 配置步骤

**1. 创建飞书应用**

- 访问 [飞书开放平台](https://open.feishu.cn/)
- 创建企业自建应用
- 获取 App ID 和 App Secret

**2. 配置 Hermes**

```yaml
# ~/.hermes/config.yaml
feishu:
  app_id: "cli_xxx"
  app_secret: "xxx"
  encrypt_key: "xxx"  # 可选
  verification_token: "xxx"  # 可选
```

**3. 启动飞书网关**

```bash
# 启动飞书集成
hermes gateway start feishu

# 或在配置中自动启动
hermes --with-gateway feishu
```

**4. 配置飞书事件订阅**

- 在飞书应用后台配置事件订阅
- URL: `http://your-server:8080/webhook/feishu`
- 订阅事件：`im.message.receive_v1`

---

### 第8集：Hermes 搭建 Skill

#### Skill 结构

```
my-skill/
├── SKILL.md           # 技能说明（必需）
├── scripts/           # Python脚本（可选）
│   └── helper.py
├── templates/         # 模板文件（可选）
│   └── email.md
└── references/        # 参考文档（可选）
    └── api-docs.md
```

#### SKILL.md 格式

```markdown
---
name: my-skill
description: 我的自定义技能
version: 1.0.0
author: Your Name
tags: [automation, productivity]
---

# 技能说明

详细描述这个技能的功能和使用方法。

## 使用场景

- 场景1：xxx
- 场景2：xxx

## 使用方法

具体的使用步骤和示例。
```

#### 创建自定义 Skill

```bash
# 创建技能目录
mkdir -p ~/.hermes/skills/my-skill

# 创建 SKILL.md
cat > ~/.hermes/skills/my-skill/SKILL.md << 'EOF'
---
name: my-skill
description: 自动化邮件发送
---

# 邮件自动化技能

自动发送邮件到指定收件人。

## 使用示例

用户: 帮我发邮件给 xxx@example.com
Agent: 好的，我来发送邮件...

## 注意事项

- 需要 SMTP 配置
- 支持附件
EOF
```

---

### 第9集：Hermes 配置 SOUL.md

#### SOUL.md 是什么？

SOUL.md 是 Hermes 的"灵魂配置"，定义了 Agent 的：
- 人格特征
- 行为准则
- 专业领域
- 沟通风格

#### 配置示例

```markdown
# SOUL - Agent 性格定义

## 核心特征

你是一位专业的技术助手，具备以下特点：

- 简洁高效：直接回答问题，避免冗长
- 技术导向：擅长编程、架构设计
- 问题导向：快速定位问题，提供解决方案

## 专业领域

1. 软件开发（Python、JavaScript）
2. 系统架构设计
3. AI/ML 应用开发
4. 自动化工具

## 沟通风格

- 使用 Markdown 格式化回复
- 代码块使用语法高亮
- 优先使用表格对比
- 避免使用emoji（除非用户使用）

## 限制条件

- 不讨论政治、宗教话题
- 不提供投资建议
- 不回答个人隐私相关问题
```

#### 配置位置

```bash
# 全局 SOUL.md
~/.hermes/SOUL.md

# Profile 特定 SOUL.md
~/.hermes/profiles/work/SOUL.md
```

---

### 第10集：Hermes 接入 MCP 服务

#### MCP 是什么？

MCP（Model Context Protocol）是 Anthropic 提出的模型上下文协议，用于标准化 AI 模型与外部工具的交互。

#### Hermes 对 MCP 的支持

Hermes 原生支持 MCP 协议，可以接入：
- 本地 MCP 服务器
- 远程 MCP API
- 社区 MCP 插件

#### 配置 MCP 服务

```yaml
# ~/.hermes/config.yaml
mcp:
  servers:
    - name: "filesystem"
      command: "mcp-server-filesystem"
      args: ["--root", "/Users/you/Documents"]
    
    - name: "github"
      command: "mcp-server-github"
      env:
        GITHUB_TOKEN: "ghp_xxx"
```

#### 使用 MCP 工具

配置后，Hermes 会自动发现 MCP 工具：

```bash
# 查看可用 MCP 工具
hermes tools list --type mcp

# 使用 MCP 工具（自动调用）
# 在对话中直接使用，如：
# "读取 Documents 目录下的 README.md"
```

---

## 第二部分：Harness Engineering 进阶篇

### 第11集：什么是 Harness Engineering

#### 定义

Harness Engineering（驾驭工程）是一种 AI Agent 开发方法论，强调通过工程化手段让 AI Agent 可控、可预测、可维护。

#### 核心理念

**传统 AI 开发的问题**：
- ❌ Agent 行为不可预测
- ❌ 错误难以追踪和修复
- ❌ 缺乏系统化的测试方法
- ❌ 难以保证输出质量

**Harness Engineering 的解决方案**：
- ✅ 建立约束层（防止错误）
- ✅ 构建信息层（理解上下文）
- ✅ 实施工程化实践（可维护）

---

### 第12集：为什么需要 Harness Engineering

#### Agent 失败模式

**1. 工具调用失败**

```
错误示例：
Agent: 我要执行删除命令
Tool: rm -rf /  # 危险操作！
Result: 系统文件被删除

Harness 解决：
- 添加白名单机制
- 危险命令拦截
- 二次确认流程
```

**2. 上下文丢失**

```
错误示例：
User: 查看上个月的销售报表
Agent: 我不知道您指的是哪个报表

Harness 解决：
- 信息层记录历史上下文
- 自动关联相关文档
- 提供上下文摘要
```

**3. 无限循环**

```
错误示例：
Agent: 执行任务A
Tool: 需要任务B的结果
Agent: 执行任务B
Tool: 需要任务A的结果
# 死循环...

Harness 解决：
- 设置最大迭代次数
- 循环检测机制
- 任务依赖分析
```

---

### 第13集：AI 工程范式的三次跃迁

#### 第一次跃迁：规则系统（1950-2000）

**特点**：
- 专家系统
- 明确的规则
- 确定性输出

**局限性**：
- 无法处理模糊情况
- 需要人工维护规则
- 扩展性差

#### 第二次跃迁：机器学习（2000-2020）

**特点**：
- 数据驱动
- 概率性输出
- 模式识别

**局限性**：
- 需要大量标注数据
- 黑盒模型，可解释性差
- 泛化能力有限

#### 第三次跃迁：Agent 系统（2020-至今）

**特点**：
- 自主决策
- 工具调用
- 持续学习

**挑战**：
- 行为不可预测
- 需要新的工程方法
- **Harness Engineering 应运而生**

---

### 第14集：Agent 常见失败模式

#### 失败模式分类

**1. 工具滥用**

表现：
- 执行危险命令
- 修改关键文件
- 过度消耗资源

防护：
```python
# 白名单机制
ALLOWED_COMMANDS = ['ls', 'cat', 'grep']
BLOCKED_PATTERNS = ['rm -rf', 'sudo', 'chmod 777']

def safe_execute(command):
    if any(pattern in command for pattern in BLOCKED_PATTERNS):
        raise SecurityError("危险命令被拦截")
    # 执行命令...
```

**2. 信息幻觉**

表现：
- 编造不存在的文件
- 臆造API文档
- 错误引用

防护：
- 信息层验证
- 源文件溯源
- 事实核查机制

**3. 目标漂移**

表现：
- 偏离用户意图
- 添加无关任务
- 忘记原始目标

防护：
- 目标追踪系统
- 定期意图确认
- 任务优先级管理

---

### 第15集：Harness 核心组件

#### 三层架构

```
┌─────────────────────────────────┐
│      约束层（Constraint）        │
│  - 白名单/黑名单                  │
│  - 输出验证                      │
│  - 权限控制                      │
└─────────────────────────────────┘
              ↓
┌─────────────────────────────────┐
│      信息层（Information）        │
│  - 项目理解                      │
│  - 上下文管理                    │
│  - 知识检索                      │
└─────────────────────────────────┘
              ↓
┌─────────────────────────────────┐
│      执行层（Execution）          │
│  - 工具调用                      │
│  - 任务编排                      │
│  - 结果反馈                      │
└─────────────────────────────────┘
```

#### 约束层详解

**作用**：防止 Agent 犯错

**实现方式**：
```python
class ConstraintLayer:
    def __init__(self):
        self.allowed_tools = set()
        self.blocked_patterns = []
        self.max_iterations = 10
    
    def validate_action(self, action):
        # 检查工具白名单
        if action.tool not in self.allowed_tools:
            raise ConstraintError("工具未授权")
        
        # 检查危险模式
        for pattern in self.blocked_patterns:
            if pattern in action.params:
                raise ConstraintError("危险操作")
        
        return True
```

#### 信息层详解

**作用**：让 Agent 理解项目

**关键能力**：
- 代码理解：解析项目结构
- 文档理解：提取关键信息
- 上下文管理：维护对话历史

#### 执行层详解

**作用**：安全执行任务

**关键特性**：
- 沙箱环境
- 执行日志
- 回滚机制

---

## 实战案例

### 案例1：自动化日报生成

**需求**：每天自动汇总 Git 提交，生成日报

**Harness 应用**：

1. **信息层**：读取 Git 日志
2. **约束层**：只读操作，不修改代码
3. **执行层**：生成 Markdown 报告

```python
# 信息层：获取 Git 提交
commits = get_git_logs(since="yesterday")

# 约束层：验证数据
validate_commits(commits)

# 执行层：生成报告
report = generate_daily_report(commits)
send_email(report)
```

### 案例2：代码审查助手

**需求**：自动审查 Pull Request

**Harness 应用**：

1. **信息层**：理解代码库规范
2. **约束层**：只提建议，不修改代码
3. **执行层**：生成审查评论

```python
# 信息层：加载项目规范
style_guide = load_style_guide()
code_context = analyze_pr_diff(pr_url)

# 约束层：检查安全性
if has_dangerous_code(code_context):
    flag_security_issue()

# 执行层：生成评论
review_comments = generate_review(code_context, style_guide)
post_pr_comments(pr_url, review_comments)
```

---

## 学习路径建议

### 入门阶段（1-2周）

1. 安装 Hermes，熟悉基本命令
2. 配置第一个 Skill
3. 尝试接入一个平台（如微信）
4. 理解 Harness 基本概念

### 进阶阶段（2-4周）

1. 开发自定义 Skill
2. 配置 MCP 服务
3. 实践 Harness 约束层
4. 构建信息层系统

### 实战阶段（4-8周）

1. 部署生产级 Agent
2. 实现复杂工作流
3. 性能优化
4. 监控和日志系统

---

## 相关资源

- **视频链接**：https://www.bilibili.com/video/BV17rVh6XEPS/
- **作者主页**：https://space.bilibili.com/615599500
- **Hermes 文档**：https://hermes-agent.nousresearch.com/
- **GitHub 仓库**：https://github.com/nousresearch/hermes

---

## 标签

#HermesAgent #HarnessEngineering #AI #Agent #智能体开发 #大模型 #Python #VitePress

---

*本笔记基于B站视频整理，包含课程核心知识点和实践经验，帮助快速掌握 Hermes Agent 和 Harness Engineering 的核心概念。*