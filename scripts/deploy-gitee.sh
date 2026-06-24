#!/usr/bin/env bash
# 构建 VitePress 并将静态文件推送到 pages 分支，供 Gitee Pages 使用
#
# 用法:
#   ./scripts/deploy-gitee.sh
#   GITEE_REPO=git@gitee.com:你的用户名/my-knowledge.git ./scripts/deploy-gitee.sh
#
# 前置: 已在 Gitee 创建仓库并配置 remote origin

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DIST="$ROOT/docs/.vitepress/dist"
PAGES_BRANCH="${PAGES_BRANCH:-pages}"
REPO="${GITEE_REPO:-$(git -C "$ROOT" remote get-url origin 2>/dev/null || true)}"

if [[ -z "$REPO" ]]; then
  echo "错误: 未找到 git remote。请先执行:"
  echo "  git remote add origin https://gitee.com/你的用户名/my-knowledge.git"
  exit 1
fi

echo "==> 构建站点..."
cd "$ROOT"
npm run docs:build

echo "==> 推送到 $PAGES_BRANCH 分支..."
TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT

cp -r "$DIST"/. "$TMP"/
cd "$TMP"
git init -q
git checkout -b "$PAGES_BRANCH"
git add -A
git commit -q -m "deploy: $(date '+%Y-%m-%d %H:%M:%S')"
git push -f "$REPO" "$PAGES_BRANCH"

echo ""
echo "部署完成！请在 Gitee 仓库开启 Pages："
echo "  服务 → Gitee Pages → 部署分支选「$PAGES_BRANCH」→ 更新"
echo "  访问: https://你的用户名.gitee.io/my-knowledge/"
