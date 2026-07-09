---
layout: home

hero:
  name: My Knowledge
  text: AI 整理的知识库
  tagline: 经验总结 · 速查表 · 项目复盘 · 全文搜索
  actions:
    - theme: brand
      text: 开始阅读
      link: /ai-summaries/
    - theme: alt
      text: 新增文章模板
      link: /templates/article-template

features:
  - icon: 🤖
    title: AI 经验总结
    details: 将 Cursor / AI 对话中的结论沉淀为结构化 Markdown，便于回顾与复用。
    link: /ai-summaries/
  - icon: ⚡
    title: 速查表
    details: 命令、配置、API 等高频信息一页搞定，减少重复搜索。
    link: /cheatsheets/
  - icon: 📦
    title: 项目复盘
    details: 记录项目背景、方案选型、踩坑与最终结论。
    link: /projects/
  - icon: 📐
    title: 初中数学体系
    details: 七到九年级完整知识体系，结合广州中考标注重点与案例。
    link: /math-junior/
  - icon: 🎮
    title: 图形化理解工具
    details: 动态二次函数探索器、勾股定理拼图证明、投硬币模拟器——交互式可视化，让抽象数学看得见摸得着。
    link: /math-junior/visual-tools.md
  - icon: 🎓
    title: 教师资格考试备考
    details: 综合素质、教育知识与能力、数学学科知识与教学能力——三科章节重点+口诀+答题模板。
    link: /teacher-exam/
  - icon: 🤖
    title: 团队 AI 编程实践指南
    details: AI 编程范式与规范、不同团队规模的协作规范、AI 编程全生命周期扩展应用。
    link: /ai-coding/
  - icon: 🔍
    title: 全文搜索
    details: VitePress 内置本地搜索，按关键词快速定位内容。
---

## 最近更新

- [🎓 教师资格考试备考](/teacher-exam/) — 三科完整知识体系、重点标注、口诀记忆、答题模板 — 2026-07-06
- [初中数学重难点真题案例](/math-junior/) — 全等三角形、一次函数、勾股定理等6大板块 — 2026-07-04
- [Hermes Agent 原理与使用建议](/ai-summaries/hermes-agent-guide.md) — 2026-07-03
- [QQ 邮箱自动化：Playwright 登录与未读邮件抓取](/ai-summaries/qq-mail-automation.md) — 2026-05-26

## 如何新增一篇

1. 复制 [文章模板](/templates/article-template.md) 到 `docs/ai-summaries/` 或对应目录
2. 在 `docs/.vitepress/config.ts` 的 sidebar 中添加入口
3. 提交并 push，GitHub Actions 会自动部署到 Pages
