# GitHub Pages 静态网站示例

这是一个最小静态网页仓库，包含：

- `index.html`：网页入口
- `styles.css`：页面样式
- `.github/workflows/pages.yml`：推送到 `main` 后自动部署到 GitHub Pages

## GitHub 如何展示静态资源

GitHub Pages 会把仓库里的静态文件发布到 CDN。浏览器访问 Pages 域名时，GitHub 返回 `index.html`，页面再通过相对路径加载 CSS、JS、图片等资源。

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
