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
  - icon: 🔍
    title: 全文搜索
    details: VitePress 内置本地搜索，按关键词快速定位内容。
---

## 最近更新

- [QQ 邮箱自动化：Playwright 登录与未读邮件抓取](/ai-summaries/qq-mail-automation) — 2026-05-26

## 如何新增一篇

1. 复制 [文章模板](/templates/article-template) 到 `docs/ai-summaries/` 或对应目录
2. 在 `docs/.vitepress/config.ts` 的 sidebar 中添加入口
3. 提交并 push，GitHub Actions 会自动部署到 Pages
