# FreeNav 免费工具导航

这是一个可直接部署到 GitHub Pages 的静态网站导航，包含分类筛选、搜索、收藏、排序和精选推荐。

- `index.html`：网页入口
- `styles.css`：页面样式
- `app.js`：资源数据和筛选逻辑
- `.github/workflows/pages.yml`：推送到 `main` 后自动部署到 GitHub Pages

## 功能

- 按分类筛选：开发、AI、设计、素材、效率、学习、API、运维、数据、安全、综合
- 按免费类型筛选：免费可用、免费增值、开源、免费清单
- 支持关键词搜索
- 支持本地收藏，收藏数据存储在浏览器 `localStorage`
- 支持综合推荐、评分、名称和收藏排序
- 适配桌面和移动端

## 发布方式

1. 在 GitHub 创建一个空仓库，例如 `github-static-demo`。
2. 把本目录推送到该仓库：

   ```bash
   git remote add origin git@github.com:你的用户名/github-static-demo.git
   git push -u origin main
   ```

3. 打开仓库的 `Settings -> Pages`，Source 选择 `GitHub Actions`。
4. 等待 Actions 跑完，访问：

   ```text
   https://你的用户名.github.io/github-static-demo/
   ```

如果想用根域名 `https://你的用户名.github.io/` 直接访问，仓库名需要是 `你的用户名.github.io`。

如果想绑定自己的域名，在 `Settings -> Pages -> Custom domain` 填入域名，并按 GitHub 提示配置 DNS。
