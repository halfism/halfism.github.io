# halfism Portfolio — Jekyll 组件化 + 独立静态单页双体系

## 项目概览
个人作品集网站，托管于 GitHub Pages，由 Jekyll 3.9 在 CI（`.github/workflows/pages.yml`，push `main` 触发）中构建为静态站。

> **重要：仓库存在两套并存体系**，修改前先确认目标页面属于哪一套。

## 技术栈
- **Jekyll 3.9** 静态站点生成器（Ruby 3.2，`bundle exec jekyll build`）
- **原生 HTML/CSS/JS**，无前端构建步骤
- **Font Awesome 4.7**（CDN 引入）
- **CSS 变量**主题系统 + 深色模式（`data-theme` + `localStorage('theme')`）
- **PWA**：`manifest.json` + `sw.js`（networkFirst 导航 / staleWhileRevalidate 静态 / cacheFirst 外部）

## 两套体系

### A. Jekyll 组件化体系（主要维护面）
入口与渲染链：
`_config.yml` → `_data/*.yml` + `_data/locales/{zh,en}.yml` → `_includes/sections/*.html`、`_includes/components/*.html` → `_layouts/{default,post,project}.html` → `assets/css/style.css` + `assets/js/main.js`

- 页面：`en/index.html`、`blog.html`(`/blog/`)、`gallery.html`、`_posts/*`（中文技术博客）
- 数据驱动：各 section 通过 `{% assign t = site.data.locales[page.lang][page.lang] %}` 取中英文案
- 社交链接唯一数据源：`_config.yml` 的 `site.socials`（footer 遍历 `site.socials`）
- 部署脚本/工具：`tools/`（含 `gen_placeholder_assets.py` 生成占位 PNG）、`offline.html`、`search.json`、`sw.js`、`manifest.json`

### B. 独立静态单页体系（真实对外首页）
- `index.html`（约 1075 行，内联 JS，无 front matter）→ Jekyll 原样输出为站点首页
- 配套样式 `styles/main.css`（约 1698 行）
- **不加载 `assets/js/main.js`、不注册 PWA**，区块含 首页/项目/资源/日常/相册/简历/关于 + Command Palette(⌘K)
- 两套体系的视觉/功能差异属设计选择，非缺陷

## 目录结构要点
```
_config.yml            # 站点配置（socials / seo / analytics[占位] / comments[占位] / contact[占位]）
_data/                 # 内容数据：projects/skills/certificates/logs + locales/{zh,en}.yml
_includes/
  header.html footer.html
  sections/  hero about projects skills logs github-stats certificates contact
  components/ pwa search
_layouts/  default post project
assets/
  css/style.css  js/main.js
  img/  avatar.png og-image.png icons/icon-*.png （占位资源由脚本生成）
  resume.html resume_en.html （占位简历说明页）
index.html + styles/main.css   # 独立静态首页
blog.html  gallery.html  _posts/  en/index.html
tools/  .github/workflows/  manifest.json  sw.js  offline.html  search.json
```

## 已知占位（待用户填真实值后启用，当前保持占位）
- `_config.yml`：`google_analytics.tracking_id`、`comments.giscus.repo_id/category_id`、`contact.form_id` 均为占位符，相关功能暂未接入。

## 开发与验证
- 本地：`bundle exec jekyll serve` 或 `python -m http.server 5000`
- 校验：构建无报错；`/blog/`、`/en/`、`/gallery.html` 与首页均无 404 资源
