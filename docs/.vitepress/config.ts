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
      '/study/': [
        {
          text: '学习备考',
          items: [
            { text: '概览', link: '/study/' },
            { text: '初中数学', link: '/study/junior-math/' },
            { text: '读书笔记', link: '/study/reading-notes/' },
            { text: '教师资格证', link: '/study/teacher-cert/' },
            { text: 'AI Agent 实战', link: '/study/ai-agent-book/' },
            { text: '石头学习', link: '/study/shitou/' },
            { text: '视频课程笔记', link: '/study/video-notes/' },
          ],
        },
      ],
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
      '/study/cyber-security/': [
        { text: '网络安全技术', items: [
          { text: '总览', link: '/study/cyber-security/' },
          { text: '学习路线图', link: '/study/cyber-security/00-学习路线图.md' },
          { text: '资源与认证地图', link: '/study/cyber-security/04-资源与认证地图.md' },
          { text: '学习计划总览', link: '/study/cyber-security/学习计划/index.md' },
        ]},
        { text: '🧱 初级篇', items: [
          { text: '篇章索引', link: '/study/cyber-security/01-初级篇-筑基.md' },
          { text: '01 网络协议', link: '/study/cyber-security/chapters/初级篇/01-网络协议.md' },
          { text: '02 Linux与命令行', link: '/study/cyber-security/chapters/初级篇/02-Linux与命令行.md' },
          { text: '03 Web安全基础', link: '/study/cyber-security/chapters/初级篇/03-Web安全基础.md' },
          { text: '04 Python安全编程', link: '/study/cyber-security/chapters/初级篇/04-Python安全编程.md' },
          { text: '05 操作系统与内网概念', link: '/study/cyber-security/chapters/初级篇/05-操作系统与内网概念.md' },
          { text: '06 CTF入门', link: '/study/cyber-security/chapters/初级篇/06-CTF入门.md' },
        ]},
        { text: '⚔️ 中级篇', items: [
          { text: '篇章索引', link: '/study/cyber-security/02-中级篇-攻防实战.md' },
          { text: '01 渗透方法论PTES', link: '/study/cyber-security/chapters/中级篇/01-渗透方法论PTES.md' },
          { text: '02 Burp进阶与逻辑漏洞', link: '/study/cyber-security/chapters/中级篇/02-Burp进阶与逻辑漏洞.md' },
          { text: '03 注入深水区', link: '/study/cyber-security/chapters/中级篇/03-注入深水区.md' },
          { text: '04 内网渗透概念', link: '/study/cyber-security/chapters/中级篇/04-内网渗透概念.md' },
          { text: '05 代码审计Java', link: '/study/cyber-security/chapters/中级篇/05-代码审计-Java.md' },
          { text: '06 代码审计PHP与Python', link: '/study/cyber-security/chapters/中级篇/06-代码审计-PHP与Python.md' },
          { text: '07 应急响应', link: '/study/cyber-security/chapters/中级篇/07-应急响应.md' },
          { text: '08 蓝队监测与ATTACK', link: '/study/cyber-security/chapters/中级篇/08-蓝队监测与ATTACK.md' },
          { text: '09 SRC实战与CISP-PTE', link: '/study/cyber-security/chapters/中级篇/09-SRC实战与CISP-PTE.md' },
        ]},
        { text: '🎯 高级篇', items: [
          { text: '篇章索引', link: '/study/cyber-security/03-高级篇-专精.md' },
          { text: '01 红队方向', link: '/study/cyber-security/chapters/高级篇/01-红队方向.md' },
          { text: '02 漏洞研究方向', link: '/study/cyber-security/chapters/高级篇/02-漏洞研究方向.md' },
          { text: '03 蓝队体系方向', link: '/study/cyber-security/chapters/高级篇/03-蓝队体系方向.md' },
          { text: '04 云与AI安全', link: '/study/cyber-security/chapters/高级篇/04-云与AI安全.md' },
          { text: '05 教学融合项目', link: '/study/cyber-security/chapters/高级篇/05-教学融合项目.md' },
        ]},
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
            { text: '📋 笔记框架说明', link: '/study/reading-notes/笔记框架说明.md' },
          ],
        },
        {
          text: '💰 投资理财',
          collapsed: false,
          items: [
            { text: '聪明的投资者', link: '/study/reading-notes/20260713-《聪明的投资者》读书笔记.md' },
            { text: '穷查理宝典', link: '/study/reading-notes/20260711-《穷查理宝典》读书笔记.md' },
            { text: '富爸爸富人的阴谋', link: '/study/reading-notes/20260710-《富爸爸富人的阴谋》读书笔记.md' },
            { text: '黑天鹅', link: '/study/reading-notes/20260713-《黑天鹅》读书笔记.md' },
          ],
        },
        {
          text: '🧠 认知心理学',
          collapsed: false,
          items: [
            { text: '思考快与慢', link: '/study/reading-notes/20260713-《思考快与慢》读书笔记.md' },
            { text: '影响力', link: '/study/reading-notes/20260713-《影响力》读书笔记.md' },
            { text: '看不见的大猩猩', link: '/study/reading-notes/20260713-《看不见的大猩猩》读书笔记.md' },
            { text: '助推', link: '/study/reading-notes/20260713-《助推》读书笔记.md' },
            { text: '人性话术大师', link: '/study/reading-notes/20260713-《人性话术大师》读书笔记.md' },
            { text: '与帕斯卡一起反脆弱性', link: '/study/reading-notes/20260722-《与帕斯卡一起反脆弱性》读书笔记.md' },
            { text: '打开心智', link: '/study/reading-notes/20260826-《打开心智》读书笔记.md' },
            { text: '认知觉醒', link: '/study/reading-notes/20260826-《认知觉醒》读书笔记.md' },
            { text: '学习之道', link: '/study/reading-notes/20260826-《学习之道》读书笔记.md' },
          ],
        },
        {
          text: '📚 哲学思想',
          collapsed: false,
          items: [
            { text: '沉思录', link: '/study/reading-notes/20260814-《沉思录》读书笔记.md' },
            { text: '苏菲的世界', link: '/study/reading-notes/20260814-《苏菲的世界》读书笔记.md' },
            { text: '中国哲学简史', link: '/study/reading-notes/20260814-《中国哲学简史》读书笔记.md' },
          ],
        },
        {
          text: '📊 经济社会科学',
          collapsed: false,
          items: [
            { text: '经济学原理', link: '/study/reading-notes/20260713-《经济学原理》读书笔记.md' },
            { text: '置身事内', link: '/study/reading-notes/20260711-《置身事内》读书笔记.md' },
            { text: '自私的基因', link: '/study/reading-notes/20260713-《自私的基因》读书笔记.md' },
            { text: '枪炮、病菌与钢铁', link: '/study/reading-notes/20260712-《枪炮、病菌与钢铁》读书笔记.md' },
            { text: '小镇喧嚣', link: '/study/reading-notes/20260713-《小镇喧嚣》读书笔记.md' },
            { text: '舆论', link: '/study/reading-notes/20260713-《舆论》读书笔记.md' },
            { text: '中国当代社会阶层分析', link: '/study/reading-notes/20260713-《中国当代社会阶层分析》读书笔记.md' },
            { text: '中国官僚政治研究', link: '/study/reading-notes/20260713-《中国官僚政治研究》读书笔记.md' },
          ],
        },
        {
          text: '🏠 人性与家庭',
          collapsed: false,
          items: [
            { text: '人性论', link: '/study/reading-notes/20260712-《人性论》读书笔记.md' },
            { text: '解剖人性1000条', link: '/study/reading-notes/20260711-《解剖人性1000条》读书笔记.md' },
            { text: '顶尖家族智慧', link: '/study/reading-notes/20260711-《顶尖家族智慧》读书笔记.md' },
            { text: '系统思考', link: '/study/reading-notes/20260712-《系统思考》读书笔记.md' },
            { text: '让孩子自主学习', link: '/study/reading-notes/20260713-《让孩子自主学习的11个方案》读书笔记.md' },
            { text: '自驱型成长', link: '/study/reading-notes/20260826-《自驱型成长》读书笔记.md' },
            { text: '园丁与木匠', link: '/study/reading-notes/20260826-《园丁与木匠》读书笔记.md' },
            { text: '唤醒内在的学习力', link: '/study/reading-notes/20260826-《唤醒内在的学习力》读书笔记.md' },
            { text: '疲劳自救手册', link: '/study/reading-notes/20260827-《疲劳自救手册》读书笔记.md' },
          ],
        },
        {
          text: '💼 职场发展',
          collapsed: false,
          items: [
            { text: '复盘', link: '/study/reading-notes/20260713-《复盘：对过去的事情做思维演练》读书笔记.md' },
            { text: '干法', link: '/study/reading-notes/20260713-《干法》读书笔记.md' },
            { text: '麦肯锡精英的48个工作习惯', link: '/study/reading-notes/20260713-《麦肯锡精英的48个工作习惯》读书笔记.md' },
          ],
        },
      ],
      '/study/video-notes/': [
        {
          text: '视频课程笔记',
          items: [
            { text: '概览', link: '/study/video-notes/' },
            { text: 'Hermes Agent + Harness Engineering', link: '/study/video-notes/20260807-hermes-agent-harness-engineering.md' },
            { text: '人口之债：计划生育、房地产与养老困局', link: '/study/video-notes/20260807-人口之债计划生育房地产与养老困局.md' },
          ],
        },
      ],
      '/study/shitou/': [
        {
          text: '石头学习',
          items: [
            { text: '概览', link: '/study/shitou/' },
            { text: 'Day 001 - 别墅与花园', link: '/study/shitou/day001.md' },
          ],
        },
      ],
      '/study/ai-agent-book/': [
        {
          text: 'AI Agent 实战',
          items: [
            { text: '概览', link: '/study/ai-agent-book/' },
          ],
        },
        {
          text: '基础',
          collapsed: false,
          items: [
            { text: '引言', link: '/study/ai-agent-book/00-introduction.md' },
            { text: '第一章 Agent 基础知识', link: '/study/ai-agent-book/01-chapter1.md' },
          ],
        },
        {
          text: '构建',
          collapsed: false,
          items: [
            { text: '第二章 上下文工程', link: '/study/ai-agent-book/02-chapter2.md' },
            { text: '第三章 用户记忆和知识库', link: '/study/ai-agent-book/03-chapter3.md' },
            { text: '第四章 工具', link: '/study/ai-agent-book/04-chapter4.md' },
            { text: '第五章 Coding Agent', link: '/study/ai-agent-book/05-chapter5.md' },
          ],
        },
        {
          text: '评估与进化',
          collapsed: false,
          items: [
            { text: '第六章 Agent 的评估', link: '/study/ai-agent-book/06-chapter6.md' },
            { text: '第七章 模型后训练', link: '/study/ai-agent-book/07-chapter7.md' },
            { text: '第八章 持续进化', link: '/study/ai-agent-book/08-chapter8.md' },
          ],
        },
        {
          text: '扩展',
          collapsed: false,
          items: [
            { text: '第九章 多模态交互', link: '/study/ai-agent-book/09-chapter9.md' },
            { text: '第十章 多 Agent 协作', link: '/study/ai-agent-book/10-chapter10.md' },
            { text: '后记', link: '/study/ai-agent-book/11-afterword.md' },
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
