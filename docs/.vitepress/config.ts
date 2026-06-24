import { defineConfig } from 'vitepress'

// Gitee Pages: https://<user>.gitee.io/my-knowledge/
// 若仓库名不同，请修改 base
export default defineConfig({
  title: 'My Knowledge',
  description: 'AI 整理的知识与经验总结',
  lang: 'zh-CN',
  base: '/my-knowledge/',
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: ['/templates/'],

  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: 'AI 总结', link: '/ai-summaries/' },
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
            { text: 'QQ 邮箱自动化', link: '/ai-summaries/qq-mail-automation' },
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
          items: [{ text: '文章模板', link: '/templates/article-template' }],
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
