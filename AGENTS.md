# halfism Portfolio — Jekyll 组件化 + 独立静态单页双体系

## 项目概览
个人作品集网站，自定义域名 `halfism.com`（根 `CNAME` 文件），托管于 GitHub Pages，由 Jekyll 3.9 在 CI（`.github/workflows/pages.yml`，push `main` 或 `workflow_dispatch` 触发）中构建为静态站。

> **重要：仓库存在两套并存体系**，修改前先确认目标页面属于哪一套。

## 技术栈
- **Jekyll 3.9** 静态站点生成器（Ruby 3.2，`bundle exec jekyll build`）
- **原生 HTML/CSS/JS**，无前端构建步骤
- **Font Awesome 4.7**（CDN 引入）
- **CSS 变量**主题系统 + 深色模式（`data-theme` + `localStorage('theme')`）
- **PWA**：`manifest.json`（`start_url: /`）+ `sw.js`（networkFirst 导航 / staleWhileRevalidate 静态 / cacheFirst 外部；缓存版本 `halfism-v3`）

## 两套体系

### A. Jekyll 组件化体系（主要维护面）
入口与渲染链：
`_config.yml` → `_data/*.yml` + `_data/locales/{zh,en}.yml` → `_includes/sections/*.html`、`_includes/components/*.html` → `_layouts/{default,post,project}.html` → `assets/css/style.css` + `assets/js/main.js`

- 页面：`en/index.html`(`/en/`)、`blog.html`(`/blog/`)、`gallery.html`、`_posts/*`（6 篇 `layout: post` 中文技术博客 + 1 篇 `layout: project`）
- 数据驱动：各 section 通过 `{% assign t = site.data.locales[page.lang][page.lang] %}` 取中英文案
- 多语言文案：`_data/locales/{zh,en}.yml`，18 个命名空间（nav / hero / about / projects / skills / logs / stats / certificates / contact / blog / gallery / search / pwa / footer / post / project / offline / common），**zh 与 en 必须键对键对齐**
- 社交链接唯一数据源：`_config.yml` 的 `site.socials`（footer 遍历 `site.socials`；`_data/socials.yml` 已删除）
- 部署脚本/工具：`tools/`（含 `gen_placeholder_assets.py` 生成占位 PNG）、`offline.html`、`search.json`、`sw.js`、`manifest.json`

### B. 独立静态单页体系（真实对外首页）
- `index.html`（1167 行，内联 JS，无 front matter）→ Jekyll 原样输出为站点首页
- 配套样式 `styles/main.css`（1951 行）
- **不加载 `assets/js/main.js`**（交互全部内联），但**已注册 `sw.js` 并引入 `/manifest.json`**，PWA 可安装且离线可用
- 导航 8 项：首页(`#hero`) / 博客（外链 `https://halfism.com/lantab`） / 项目 / 资源 / 日常 / 相册 / 简历 / 关于
- 功能：Command Palette(⌘K)、主题切换、阅读进度条、Toast、相册灯箱、复制邮箱
- 两套体系的视觉/功能差异属设计选择，非缺陷；但**两套体系的文案与数据各自维护，需人工保持同步**

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
img/                     # 相册图片：{nature,tech,travel}/img1-3.jpg 共 9 张
tools/  .github/workflows/  manifest.json  sw.js  offline.html  search.json
```

## 已知占位（待填真实值后启用，当前保持占位）
- `google_analytics.tracking_id = G-XXXXXXXXXX`：`enabled` 已置 `false`，避免占位 ID 产生无效请求。**填入真实 GA4 ID 后需把 `enabled` 改回 `true`**，并在 `sw.js` 的 `EXTERNAL_URLS` 中取消 GA 脚本注释。
- `comments.giscus.repo_id / category_id`、`contact.form_id`：仍为占位符，相关功能暂未接入。
- 三处占位均已在 `_config.yml` 对应行上方加 TODO 注释说明。

## 开发与验证
- 本地无 Ruby/Jekyll，**构建只能依赖 CI**；静态预览可用 `python -m http.server 5000`
- 静态校验：`python tools/verify_fixes.py`（需 `pyyaml`），覆盖 YAML 合法性、资源存在性、`sw.js` 预缓存、locale 键、社交数据等，当前 **38/38 通过**
- 已装 Python 3.14.3：`C:\Users\xiejian\.workbuddy\binaries\python\versions\3.14.3\python.exe`
- 验收标准：构建无报错；`/blog/`、`/en/`、`/gallery.html` 与首页均无 404 资源

## 维护约定（易踩的坑）
- **资源路径**：站内引用一律用 `{{ '...' | relative_url }}`，不要写死 `/img/...` 这类绝对路径（子路径部署会 404）。
- **域名一致性**：`_config.yml` 的 `url` 必须与根 `CNAME` 一致（现为 `https://halfism.com`）；`index.html` 的 `og:url` 与 JSON-LD 是硬编码的，改域名时这三处要一起改。
- **Service Worker**：改动 `PRECACHE_ASSETS` 或缓存策略后，**必须同步提升 `CACHE_NAME` / `STATIC_CACHE` / `DYNAMIC_CACHE` / `EXTERNAL_CACHE` 四个版本号**（现为 v3），否则老用户缓存不会更新。
- **社交链接**：唯一数据源是 `_config.yml` 的 `site.socials`，`_data/socials.yml` 已删除，不要再新建。
- **提交编码**：Windows PowerShell 控制台为 GBK，直接 `git commit -m "中文"` 会使提交信息乱码；改用 UTF-8 的 `-F` 消息文件，或先执行 `chcp 65001`。
