# My Knowledge

个人知识归档仓库，自动从 Hermes AI Agent 同步对话记录。

## 目录结构

```
sessions/        ← Hermes 对话归档（按年份分类）
  YYYY/
    YYYY-MM-DD-title.md
topics/          ← 按主题整理的知识点（人工或自动归类）
README.md        ← 本文件
```

## 归档流程

由 Hermes cron job 自动执行：
1. 提取新的 Hermes 会话记录
2. 格式化为可读 Markdown
3. 提交并推送到 Gitee
