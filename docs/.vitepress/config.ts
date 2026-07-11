import { defineConfig } from 'vitepress'

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
      { text: '工作', link: '/work/' },
      { text: '学习', link: '/study/' },
      { text: 'GitHub', link: 'https://github.com/hushaofeng/my-knowledge' },
    ],

    sidebar: {
      '/work/ai-coding/': [
        {
          text: 'AI 编程实践指南',
          items: [
            { text: '概览', link: '/work/ai-coding/' },
            { text: '范式与规范', link: '/work/ai-coding/paradigm.md' },
            { text: '团队规范', link: '/work/ai-coding/team-spec.md' },
            { text: '扩展应用', link: '/work/ai-coding/extended-use.md' },
          ],
        },
      ],
      '/work/ai-tools/': [
        {
          text: 'AI 工具使用',
          items: [
            { text: '概览', link: '/work/ai-tools/' },
            { text: 'Hermes Agent 原理与使用', link: '/work/ai-tools/hermes-agent-guide.md' },
            { text: 'QQ 邮箱自动化', link: '/work/ai-tools/qq-mail-automation.md' },
          ],
        },
      ],
      '/study/junior-math/': [
        {
          text: '初中数学知识体系',
          items: [
            { text: '概览', link: '/study/junior-math/' },
            { text: '七年级（初一）', link: '/study/junior-math/grade7.md' },
            { text: '八年级（初二）', link: '/study/junior-math/grade8.md' },
            { text: '九年级（初三）', link: '/study/junior-math/grade9.md' },
            { text: '🎮 图形化理解工具', link: '/study/junior-math/visual-tools.md' },
          ],
        },
        {
          text: '中考真题案例',
          items: [
            { text: '真题总览', link: '/study/junior-math/exam/' },
            { text: '二次函数', link: '/study/junior-math/exam/quadratic-geometry.md' },
            { text: '圆', link: '/study/junior-math/exam/circle-problems.md' },
            { text: '相似三角形', link: '/study/junior-math/exam/similar-triangles.md' },
            { text: '全等三角形', link: '/study/junior-math/exam/congruent-triangles.md' },
            { text: '一次函数', link: '/study/junior-math/exam/linear-function.md' },
            { text: '锐角三角函数', link: '/study/junior-math/exam/trigonometry.md' },
            { text: '方程应用题', link: '/study/junior-math/exam/equations-applications.md' },
            { text: '特殊平行四边形', link: '/study/junior-math/exam/special-quadrilaterals.md' },
            { text: '勾股定理', link: '/study/junior-math/exam/pythagorean-theorem.md' },
          ],
        },
      ],
      '/study/reading-notes/': [
        {
          text: '读书笔记',
          items: [
            { text: '概览', link: '/study/reading-notes/' },
            { text: '富爸爸富人的阴谋', link: '/study/reading-notes/20260710-《富爸爸富人的阴谋》读书笔记.md' },
            { text: '穷查理宝典', link: '/study/reading-notes/20260711-《穷查理宝典》读书笔记.md' },
            { text: '置身事内', link: '/study/reading-notes/20260711-《置身事内》读书笔记.md' },
            { text: '解剖人性1000条', link: '/study/reading-notes/20260711-《解剖人性1000条》读书笔记.md' },
          ],
        },
      ],
      '/study/teacher-cert/comprehensive-quality/': [
        {
          text: '综合素质（中学）',
          items: [
            { text: '概览', link: '/study/teacher-cert/comprehensive-quality/' },
            { text: '第一章 职业理念', link: '/study/teacher-cert/comprehensive-quality/chapter1.md' },
            { text: '第二章 法律法规', link: '/study/teacher-cert/comprehensive-quality/chapter2.md' },
            { text: '第三章 职业道德', link: '/study/teacher-cert/comprehensive-quality/chapter3.md' },
            { text: '第四章 文化素养', link: '/study/teacher-cert/comprehensive-quality/chapter4.md' },
            { text: '第五章 基本能力', link: '/study/teacher-cert/comprehensive-quality/chapter5.md' },
          ],
        },
      ],
      '/study/teacher-cert/education-knowledge/': [
        {
          text: '教育知识与能力',
          items: [
            { text: '概览', link: '/study/teacher-cert/education-knowledge/' },
            { text: '第一章 教育基础', link: '/study/teacher-cert/education-knowledge/chapter1.md' },
            { text: '第二章 中学课程', link: '/study/teacher-cert/education-knowledge/chapter2.md' },
            { text: '第三章 中学教学', link: '/study/teacher-cert/education-knowledge/chapter3.md' },
            { text: '第四章 学习心理', link: '/study/teacher-cert/education-knowledge/chapter4.md' },
            { text: '第五章 发展心理', link: '/study/teacher-cert/education-knowledge/chapter5.md' },
            { text: '第六章 心理辅导', link: '/study/teacher-cert/education-knowledge/chapter6.md' },
            { text: '第七章 中学德育', link: '/study/teacher-cert/education-knowledge/chapter7.md' },
            { text: '第八章 班级管理', link: '/study/teacher-cert/education-knowledge/chapter8.md' },
          ],
        },
      ],
      '/study/teacher-cert/math-subject/': [
        {
          text: '数学学科知识与教学能力',
          items: [
            { text: '概览', link: '/study/teacher-cert/math-subject/' },
            { text: '第一章 大学数学', link: '/study/teacher-cert/math-subject/chapter1.md' },
            { text: '第二章 初中数学', link: '/study/teacher-cert/math-subject/chapter2.md' },
            { text: '第三章 课程知识', link: '/study/teacher-cert/math-subject/chapter3.md' },
            { text: '第四章 教学方法', link: '/study/teacher-cert/math-subject/chapter4.md' },
            { text: '第五章 教学设计', link: '/study/teacher-cert/math-subject/chapter5.md' },
            { text: '第六章 案例分析', link: '/study/teacher-cert/math-subject/chapter6.md' },
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
      message: '由 AI 辅助整理，Markdown 版本管理 · 托管于 GitHub Pages',
      copyright: 'Copyright © 2026',
    },

    editLink: {
      pattern: 'https://github.com/hushaofeng/my-knowledge/edit/main/docs/:path',
      text: '在 GitHub 上编辑',
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
