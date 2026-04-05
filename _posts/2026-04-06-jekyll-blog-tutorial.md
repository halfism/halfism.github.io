---
layout: post
title: "使用 Jekyll 构建高性能个人博客"
date: 2026-04-06 12:00:00 +0800
category: 教程
tags:
  - Jekyll
  - GitHub Pages
  - 前端开发
image: https://picsum.photos/seed/jekyll-blog/800/400
excerpt: 探索如何使用 Jekyll 和 GitHub Pages 创建快速、安全且易于维护的个人博客，包含完整的配置和优化技巧。
---

## 为什么选择 Jekyll？

Jekyll 是一个静态站点生成器，它将纯文本转换为静态网站和博客。以下是选择 Jekyll 的几个关键原因：

### ✅ 核心优势

1. **零成本托管**：借助 GitHub Pages 免费托管，无需服务器费用
2. **极致性能**：生成的静态页面加载速度极快
3. **版本控制**：所有内容都在 Git 中管理，轻松回滚
4. **Markdown 支持**：用简洁的 Markdown 语法撰写内容
5. **高度可定制**：灵活的主题系统和插件生态

## 快速开始指南

### 安装环境

```bash
# 安装 Ruby (推荐 3.2+)
# Windows: 使用 RubyInstaller
# macOS: brew install ruby
# Linux: apt install ruby-full

# 安装 Jekyll 和 Bundler
gem install bundler jekyll

# 创建新项目
jekyll new my-blog
cd my-blog

# 本地预览
bundle exec jekyll serve --livereload
```

### 项目结构说明

```
my-blog/
├── _config.yml      # 站点配置文件
├── _posts/          # 博客文章目录
├── _layouts/        # 页面布局模板
├── _includes/       # 可复用的组件
├── assets/          # 静态资源（CSS、JS、图片）
├── _data/           # 数据文件（YAML）
└── index.html       # 首页
```

## 性能优化技巧

### 1. 图片优化

```html
<!-- 使用懒加载 -->
<img src="image.jpg" loading="lazy" alt="描述">

<!-- 使用 WebP 格式 -->
<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="描述">
</picture>
```

### 2. CSS 优化

```css
/* 使用 CSS 变量实现主题切换 */
:root {
  --color-primary: #3b82f6;
  --font-size-base: 1rem;
}

[data-theme="dark"] {
  --color-primary: #58a6ff;
}
```

### 3. JavaScript 优化

```javascript
// 使用 defer 属性延迟加载
<script src="main.js" defer></script>

// 实现代码分割
import('./module.js').then(module => {
  // 动态加载模块
});
```

## SEO 最佳实践

### Meta 标签配置

在 `_config.yml` 中添加：

```yaml
title: 你的网站标题
description: 网站描述（150-160字符）
url: "https://yourdomain.com"

# Open Graph 配置
social:
  og_image: /assets/img/og-image.png
  twitter_username: your_handle
```

### 结构化数据

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "文章标题",
  "datePublished": "2026-04-06",
  "author": {
    "@type": "Person",
    "name": "作者名称"
  }
}
</script>
```

## 部署到 GitHub Pages

### 自动部署流程

1. **推送代码**到 `main` 分支
2. **GitHub Actions** 自动触发构建
3. **Jekyll 构建**生成静态文件
4. **自动部署**到 GitHub Pages

查看 [`.github/workflows/pages.yml`](/.github/workflows/pages.yml) 了解完整配置。

## 总结

Jekyll + GitHub Pages 是构建个人博客的理想选择：

- 🚀 **快速**：静态页面加载速度极快
- 💰 **免费**：无需支付服务器费用
- 🔒 **安全**：无数据库，减少攻击面
- 📝 **简单**：Markdown 写作，Git 版本控制
- 🔧 **灵活**：高度可定制化

> **小贴士**：定期备份你的内容，并使用分支策略管理不同版本的更改。

---

**相关资源**：
- [Jekyll 官方文档](https://jekyllrb.com/docs/)
- [GitHub Pages 指南](https://docs.github.com/en/pages)
- [Liquid 模板语言](https://shopify.github.io/liquid/)
