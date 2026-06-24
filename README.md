# my-knowledge

个人知识库：AI 整理的经验总结、速查表与项目复盘。基于 [VitePress](https://vitepress.dev/) 构建，支持全文搜索，通过 GitHub Pages 发布。

## 本地预览

```bash
npm install
npm run docs:dev
```

浏览器打开 http://localhost:5173/my-knowledge/

## 构建

```bash
npm run docs:build
npm run docs:preview
```

## 目录结构

```
my-knowledge/
├── docs/
│   ├── .vitepress/config.ts   # 站点配置（导航、搜索、sidebar）
│   ├── index.md               # 首页
│   ├── ai-summaries/          # AI 经验总结
│   ├── cheatsheets/           # 速查表
│   ├── projects/              # 项目复盘
│   └── templates/             # 文章模板
├── .github/workflows/deploy.yml
└── package.json
```

## 发布到 GitHub Pages

### 1. 创建 GitHub 仓库

```bash
cd my-knowledge
git init
git add .
git commit -m "init: VitePress knowledge base"
gh repo create my-knowledge --private --source=. --push
```

### 2. 开启 GitHub Pages

仓库 → **Settings → Pages → Build and deployment**：

- Source: **GitHub Actions**

推送 `main` 分支后，`.github/workflows/deploy.yml` 会自动构建并部署。

### 3. 访问地址

```
https://<你的用户名>.github.io/my-knowledge/
```

### 4. 修改配置

若 GitHub 用户名不是占位符，请编辑：

- `docs/.vitepress/config.ts` 中的 `socialLinks` 和 `editLink`
- 若仓库名不是 `my-knowledge`，修改 `base: '/my-knowledge/'`

## 新增文章

1. 复制 `docs/templates/article-template.md` 到目标目录
2. 在 `docs/.vitepress/config.ts` 的 `sidebar` 添加入口
3. 更新对应目录的 `index.md` 列表
4. `git commit && git push`

## 技术栈

- [VitePress](https://vitepress.dev/) — 静态站点 + 本地全文搜索
- GitHub Actions — 自动部署 Pages
- Markdown — 内容与版本管理
