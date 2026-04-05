# halfism.github.io

现代化的个人作品集网站，基于 Jekyll 构建，托管在 GitHub Pages 上。

## ✨ 特性

- 🎨 **现代化设计** - 采用简洁的卡片式布局、渐变文字和精致的视觉效果
- 🌓 **深色模式** - 完美支持亮色/深色主题切换，自动跟随系统偏好
- 🌍 **多语言支持** - 内置中文（默认）和英文双语支持
- 📱 **响应式布局** - 在桌面、平板和移动设备上均有完美表现
- ♿ **无障碍优化** - 遵循 WCAG 标准，支持键盘导航和屏幕阅读器
- ⚡ **高性能** - 轻量级代码，快速加载，优秀的 Core Web Vitals
- 🔍 **SEO 优化** - 完整的 meta 标签、Open Graph 和 Twitter Card 支持

## 🏗️ 技术栈

| 技术 | 用途 |
|------|------|
| **Jekyll 3.9** | 静态网站生成器 |
| **HTML5 & CSS3** | 语义化标签 + CSS 变量（Custom Properties） |
| **Vanilla JavaScript** | 原生 JS，无重型框架依赖 |
| **Font Awesome 4.7** | 矢量图标库 |
| **CSS Variables** | 主题系统和深色模式实现 |
| **GitHub Pages** | 免费静态托管 |

## 📁 项目结构

```
.
├── _config.yml              # 站点配置文件（数据驱动）
├── _data/                   # 数据文件
│   ├── projects.yml         # 项目展示数据
│   ├── skills.yml           # 技能数据
│   ├── certificates.yml     # 认证证书数据
│   ├── logs.yml             # 开发日志
│   └── socials.yml          # 社交链接
├── _includes/
│   ├── header.html          # 顶部导航栏
│   ├── footer.html          # 底部页脚
│   └── sections/            # 可复用页面组件
│       ├── hero.html        # Hero 区域
│       ├── about.html       # 关于我
│       ├── projects.html    # 项目展示
│       ├── skills.html      # 技能展示
│       ├── logs.html        # 开发日志
│       ├── github-stats.html # GitHub 统计
│       ├── certificates.html # 专业认证
│       └── contact.html     # 联系方式
├── _layouts/
│   └── default.html         # 默认布局（含 SEO 优化）
├── assets/
│   ├── css/
│   │   └── style.css        # 核心样式表（CSS 变量 + Utility 类）
│   └── js/
│       └── main.js          # 核心交互逻辑
├── index.html               # 网站首页（组件化）
├── blog.html                # 博客列表页
├── gallery.html             # 摄影画廊页
├── img/                     # 图片资源
├── CNAME                    # 自定义域名配置
├── Gemfile                  # Ruby 依赖
└── README.md                # 项目文档
```

## 🎯 设计理念

本项目参考了以下优秀开源项目的最佳实践：

1. **[simplefolio](https://github.com/sethcottle/simplefolio)** - 极简、可访问性优先、单文件理念
2. **[simple-landing-page](https://github.com/kaskavalci/simple-landing-page)** - Jekyll 原生、易配置、现代化设计
3. **[RepoPages](https://github.com/ismoy/repopages-template)** - Tailwind CSS 风格、性能优化

**核心原则：**
- ✅ 数据驱动 - 内容与展示分离
- ✅ 组件化 - 高度模块化和可复用
- ✅ 渐进增强 - 基础功能优先，增强体验次之
- ✅ 性能优先 - 减少依赖，优化加载速度
- ✅ 无障碍性 - 遵循 Web 标准，服务所有用户

## 🚀 快速开始

### 本地开发

确保您的环境中已安装 Ruby 和 Jekyll。

```bash
# 安装依赖
bundle install

# 启动本地服务器
bundle exec jekyll serve

# 访问 http://localhost:4000
```

### 自定义配置

编辑 `_config.yml` 来自定义：

```yaml
# 个人信息
author:
  name: Your Name
  bio_zh: 你的个人简介
  bio_en: Your bio in English
  
# 社交链接
socials:
  github:
    username: yourusername
    
# 主题设置
theme_settings:
  default_mode: auto  # light, dark, or auto
  primary_color: "#3b82f6"
```

添加或修改数据文件在 `_data/` 目录下：
- `projects.yml` - 展示你的项目
- `skills.yml` - 列出你的技能
- `certificates.yml` - 添加专业认证
- `logs.yml` - 记录项目迭代历史

## 📊 性能指标

- ⚡ **首屏加载**: < 1.5s (3G 网络)
- 📦 **总大小**: < 100KB (gzipped)
- ♿ **可访问性评分**: 95+ (Lighthouse)
- 🔍 **SEO 评分**: 100 (Lighthouse)

## 🔄 版本历史

### v3.0 (当前版本) - 全面重构

**重大改进：**
- ✅ 组件化架构 - 8 个可复用组件
- ✅ CSS 变量体系 - 完整的设计令牌系统
- ✅ 数据驱动配置 - YAML 数据文件管理内容
- ✅ 性能优化 - 移除 Tailwind CDN，减少 80KB+
- ✅ SEO 增强 - Open Graph、Twitter Card、Canonical URL
- ✅ 无障碍提升 - Skip links、ARIA 标签、键盘导航
- ✅ 代码精简 - 首页从 528 行减少到 21 行

**新增功能：**
- 🎨 现代化的 BEM 风格 CSS 类名
- 📱 改进的移动端响应式设计
- 🌓 双重主题检测（data-theme + .dark class）
- 🖨️ 打印样式支持

**清理内容：**
- ❌ 移除 neumorphism 相关文件（已弃用设计风格）
- ❌ 移除演示页面（design-system.html 等）
- ❌ 移除冗余文档目录

### v2.0 - 功能完善

- 新增多语言支持（中英双语）
- 新增 GitHub 统计卡片
- 新增专业认证展示
- 新增简历下载模块
- 优化导航栏和主题切换

### v1.0 - 初始版本

- 基础 Jekyll 站点搭建
- 响应式布局实现
- 深色模式支持

## 📝 开发指南

### 添加新页面

1. 在根目录创建 HTML 文件
2. 添加 front matter：
```yaml
---
layout: default
title: 页面标题
lang: zh
---
```
3. 使用 `{% include sections/component-name.html %}` 引入组件

### 创建新组件

1. 在 `_includes/sections/` 目录创建 `.html` 文件
2. 使用 Jekyll 模板语法访问数据：`{{ site.data.your-data }}`
3. 支持多语言：`{% if page.lang == 'en' %}English{% else %}中文{% endif %}`
4. 在页面中引用：`{% include sections/your-component.html %}`

### 修改样式

所有样式使用 CSS 变量，可在 `assets/css/style.css` 中调整：

```css
:root {
    --color-primary: #3b82f6;  /* 主色调 */
    --color-bg: #ffffff;       /* 背景色 */
}
```

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

---

**构建时间**: {{ "now" | date: "%Y-%m-%d %H:%M" }}
**最后更新**: 2026-04-06
