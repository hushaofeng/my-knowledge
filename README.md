# my-knowledge

个人知识库：AI 整理的经验总结、速查表与项目复盘。基于 [VitePress](https://vitepress.dev/) 构建，支持全文搜索，通过 **Gitee Pages** 发布。

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
├── scripts/deploy-gitee.sh    # 手动部署到 Gitee Pages
├── .gitee/pipelines/deploy.yml # Gitee Go 自动部署（可选）
└── package.json
```

## 发布到 Gitee Pages

### 1. 创建 Gitee 仓库

```bash
cd my-knowledge

# 添加 Gitee 远程（替换为你的用户名）
git remote add origin https://gitee.com/peak2010/my-knowledge.git
# 若已有 GitHub remote，可改为:
# git remote set-url origin https://gitee.com/peak2010/my-knowledge.git

git push -u origin main
```

在 [gitee.com](https://gitee.com) 网页端也可先创建空仓库 `my-knowledge`，再 push。

### 2. 部署方式（二选一）

#### 方式 A：脚本部署（推荐，简单可靠）

```bash
chmod +x scripts/deploy-gitee.sh
./scripts/deploy-gitee.sh
```

脚本会构建站点，将 `docs/.vitepress/dist` 推送到 **`pages`** 分支。

然后在 Gitee 仓库：

**服务 → Gitee Pages → 部署分支选 `pages` → 保存/更新**

#### 方式 B：Gitee Go 自动部署

1. 仓库 → **流水线** → 启用 Gitee Go
2. 新建流水线，选择 `.gitee/pipelines/deploy.yml`
3. 每次 push `main` 自动构建并部署

> Gitee Go 可能需要实名认证或仓库为公开仓库，以 Gitee 当前政策为准。

### 3. 访问地址

```
https://peak2010.gitee.io/my-knowledge/
```

（将 `peak2010` 换成你的 Gitee 用户名）

### 4. 修改配置

若仓库名不是 `my-knowledge`，编辑 `docs/.vitepress/config.ts`：

```ts
base: '/你的仓库名/',
```

## Gitee vs GitHub

| 对比 | Gitee | GitHub |
|------|-------|--------|
| 国内访问 | 快 | 较慢/需代理 |
| Pages 免费 | 是（需实名） | 是 |
| 私有仓库 Pages | 支持 | 支持 |
| CI | Gitee Go | GitHub Actions |
| 全文搜索 | VitePress 本地搜索，两者相同 | 相同 |

## 新增文章

1. 复制 `docs/templates/article-template.md` 到目标目录
2. 在 `docs/.vitepress/config.ts` 的 `sidebar` 添加入口
3. 更新对应目录的 `index.md` 列表
4. `git commit && git push && ./scripts/deploy-gitee.sh`

## 技术栈

- [VitePress](https://vitepress.dev/) — 静态站点 + 本地全文搜索
- [Gitee Pages](https://gitee.com/help/articles/4136) — 静态站点托管
- Markdown — 内容与版本管理
