import { defineConfig } from 'vitepress'

// Gitee Pages: https://<user>.gitee.io/my-knowledge/
// 若仓库名不同，请修改 base
export default defineConfig({
  title: 'My Knowledge',
  description: 'AI 整理的知识与经验总结',
  lang: 'zh-CN',
  base: '/my-knowledge/',
  cleanUrls: false,
  lastUpdated: true,
  ignoreDeadLinks: true,

  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: 'AI 总结', link: '/ai-summaries/' },
      { text: '初中数学', link: '/math-junior/' },
      { text: '教师资格', link: '/teacher-exam/' },
      { text: '速查表', link: '/cheatsheets/' },
      { text: '项目复盘', link: '/projects/' },
      { text: 'Gitee', link: 'https://gitee.com/peak2010/my-knowledge' },
    ],

    sidebar: {
      '/ai-summaries/': [
        {
          text: 'AI 经验总结',
          items: [
            { text: '概览', link: '/ai-summaries/' },
            { text: 'QQ 邮箱自动化', link: '/ai-summaries/qq-mail-automation.md' },
            { text: 'Hermes Agent 原理与使用建议', link: '/ai-summaries/hermes-agent-guide.md' },
          ],
        },
      ],
      '/cheatsheets/': [
        {
          text: '速查表',
          items: [{ text: '概览', link: '/cheatsheets/' }],
        },
      ],
      '/projects/': [
        {
          text: '项目复盘',
          items: [{ text: '概览', link: '/projects/' }],
        },
      ],
      '/templates/': [
        {
          text: '模板',
          items: [{ text: '文章模板', link: '/templates/article-template.md' }],
        },
      ],
      '/math-junior/': [
        {
          text: '初中数学知识体系',
          items: [
            { text: '概览', link: '/math-junior/' },
            { text: '七年级（初一）', link: '/math-junior/grade7.md' },
            { text: '八年级（初二）', link: '/math-junior/grade8.md' },
            { text: '九年级（初三）', link: '/math-junior/grade9.md' },
            { text: '二次函数真题', link: '/math-junior/quadratic-geometry.md' },
            { text: '圆真题', link: '/math-junior/circle-problems.md' },
            { text: '相似三角形真题', link: '/math-junior/similar-triangles.md' },
            { text: '全等三角形真题', link: '/math-junior/congruent-triangles.md' },
            { text: '一次函数真题', link: '/math-junior/linear-function.md' },
            { text: '锐角三角函数真题', link: '/math-junior/trigonometry.md' },
            { text: '方程应用题真题', link: '/math-junior/equations-applications.md' },
            { text: '特殊平行四边形真题', link: '/math-junior/special-quadrilaterals.md' },
            { text: '勾股定理真题', link: '/math-junior/pythagorean-theorem.md' },
          ],
        },
        {
          text: '🎮 图形化理解工具',
          items: [
            { text: '工具总览', link: '/math-junior/visual-tools.md' },
          ],
        },
      ],
      '/teacher-exam/': [
        {
          text: '教师资格考试备考',
          items: [
            { text: '概览', link: '/teacher-exam/' },
            { text: '综合素质（中学）', link: '/teacher-exam/comprehensive-quality/' },
            { text: ' ├ 第一章 职业理念', link: '/teacher-exam/comprehensive-quality/chapter1.md' },
            { text: ' ├ 第二章 法律法规', link: '/teacher-exam/comprehensive-quality/chapter2.md' },
            { text: ' ├ 第三章 职业道德', link: '/teacher-exam/comprehensive-quality/chapter3.md' },
            { text: ' ├ 第四章 文化素养', link: '/teacher-exam/comprehensive-quality/chapter4.md' },
            { text: ' └ 第五章 基本能力', link: '/teacher-exam/comprehensive-quality/chapter5.md' },
            { text: '教育知识与能力', link: '/teacher-exam/education-knowledge/' },
            { text: ' ├ 第一章 教育基础', link: '/teacher-exam/education-knowledge/chapter1.md' },
            { text: ' ├ 第二章 中学课程', link: '/teacher-exam/education-knowledge/chapter2.md' },
            { text: ' ├ 第三章 中学教学', link: '/teacher-exam/education-knowledge/chapter3.md' },
            { text: ' ├ 第四章 学习心理', link: '/teacher-exam/education-knowledge/chapter4.md' },
            { text: ' ├ 第五章 发展心理', link: '/teacher-exam/education-knowledge/chapter5.md' },
            { text: ' ├ 第六章 心理辅导', link: '/teacher-exam/education-knowledge/chapter6.md' },
            { text: ' ├ 第七章 中学德育', link: '/teacher-exam/education-knowledge/chapter7.md' },
            { text: ' └ 第八章 班级管理', link: '/teacher-exam/education-knowledge/chapter8.md' },
            { text: '数学学科知识与教学能力', link: '/teacher-exam/math-subject/' },
          ],
        },
      ],
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '无匹配结果',
            resetButtonTitle: '清除',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },

    footer: {
      message: '由 AI 辅助整理，Markdown 版本管理 · 托管于 Gitee Pages',
      copyright: 'Copyright © 2026',
    },

    editLink: {
      pattern: 'https://gitee.com/peak2010/my-knowledge/edit/main/docs/:path',
      text: '在 Gitee 上编辑',
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    outline: {
      label: '目录',
    },
  },
})
