# halfism.github.io - 开发文档

> 版本: v1.0 | 日期: 2026-03-29 | 状态: 草稿

---

## 1. 环境准备

### 1.1 必需工具

| 工具 | 版本 | 用途 |
|------|------|------|
| Git | 2.x+ | 版本控制 |
| Ruby | 3.x+ | Jekyll 运行 |
| Bundler | 2.x+ | 依赖管理 |

### 1.2 安装步骤

#### Windows

```powershell
# 1. 安装 Ruby
# 下载 RubyInstaller: https://rubyinstaller.org/
# 选择 WITH DevKit 版本

# 2. 验证安装
ruby -v
gem -v

# 3. 安装 Bundler
gem install bundler

# 4. 克隆仓库
git clone https://github.com/halfism/halfism.github.io.git
cd halfism.github.io

# 5. 安装依赖
bundle install

# 6. 启动开发服务器
bundle exec jekyll serve
```

#### macOS

```bash
# 1. 安装 Homebrew (如果未安装)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 2. 安装 Ruby
brew install ruby

# 3. 添加到 PATH
echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc

# 4. 安装 Jekyll
gem install jekyll bundler

# 5. 克隆并启动
git clone https://github.com/halfism/halfism.github.io.git
cd halfism.github.io
bundle install
bundle exec jekyll serve
```

#### Linux (Ubuntu/Debian)

```bash
# 1. 安装依赖
sudo apt update
sudo apt install ruby ruby-dev build-essential

# 2. 安装 Bundler 和 Jekyll
sudo gem install bundler jekyll

# 3. 克隆并启动
git clone https://github.com/halfism/halfism.github.io.git
cd halfism.github.io
bundle install
bundle exec jekyll serve
```

### 1.3 开发服务器

```bash
# 启动本地服务器 (默认端口 4000)
bundle exec jekyll serve

# 指定端口
bundle exec jekyll serve --port 8080

# 监听文件变化自动重建
bundle exec jekyll serve --livereload

# 生产构建
bundle exec jekyll build

# 清除缓存重建
bundle exec jekyll clean && jekyll build
```

访问 `http://localhost:4000` 查看本地站点。

---

## 2. 项目规范

### 2.1 Git 工作流

```
main (生产分支)
    │
    ├── feature/xxx (功能分支)
    │       │
    │       └── PR → main (合并)
    │
    └── hotfix/xxx (热修复分支)
            │
            └── PR → main (合并)
```

#### 分支命名

| 类型 | 命名格式 | 示例 |
|------|----------|------|
| 功能 | `feature/功能名` | `feature/dark-mode` |
| 修复 | `fix/问题描述` | `fix/theme-toggle` |
| 重构 | `refactor/范围` | `refactor/css-system` |
| 文档 | `docs/文档类型` | `docs/api-doc` |

#### 提交规范

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Type 类型：**

| 类型 | 说明 |
|------|------|
| `feat` | 新功能 |
| `fix` | Bug 修复 |
| `docs` | 文档更新 |
| `style` | 代码格式（不影响功能） |
| `refactor` | 重构 |
| `perf` | 性能优化 |
| `test` | 测试相关 |
| `chore` | 构建/工具变更 |

**示例：**

```
feat(logs): 新增项目迭代日志模块

- 添加 logs 导航链接（中英文）
- 首页新增时间线风格的日志展示区域
- 移动端导航支持语言切换
- 新增 _data/logs.yml 数据源

Closes #123
```

### 2.2 代码规范

#### HTML/Liquid

- 使用语义化 HTML 标签
- 属性值使用双引号
- 闭合所有标签
- 空格合理使用

```liquid
{% if condition %}
    <div class="example">
        {{ content }}
    </div>
{% endif %}
```

#### CSS

- 使用 Tailwind CSS 原子类
- 自定义样式写在 `assets/css/style.css`
- 遵循 BEM 命名（如需要）
- 移动端优先

```css
/* 示例 */
.card-base {
    background-color: var(--color-bg-card);
    border-radius: 12px;
}
```

#### JavaScript

- 原生 JavaScript，不依赖框架
- 使用 IIFE 或模块模式
- 事件监听使用 `addEventListener`
- 避免内联脚本

```javascript
(function() {
    'use strict';
    
    document.addEventListener('DOMContentLoaded', function() {
        // 代码
    });
})();
```

### 2.3 文件规范

#### 文件命名

| 类型 | 规范 | 示例 |
|------|------|------|
| 页面 | kebab-case | `about-me.html` |
| 布局 | kebab-case | `page.html` |
| 组件 | kebab-case | `card.html` |
| 数据 | kebab-case | `social-links.yml` |
| 样式 | kebab-case | `custom-style.css` |
| 脚本 | kebab-case | `gallery.js` |

#### 路径规范

```liquid
<!-- 相对路径 -->
{{ "/assets/css/style.css" | relative_url }}

<!-- 绝对路径 -->
{{ site.url }}/assets/css/style.css

<!-- 数据引用 -->
{{ site.data.logs }}
{{ site.github_username }}
```

---

## 3. 功能开发指南

### 3.1 添加新页面

1. 创建页面文件：

```html
---
layout: default
title: 新页面
---

<!-- 页面内容 -->
<h1>新页面</h1>
```

2. 添加导航链接（`_includes/header.html`）：

```html
<a href="/新页面.html" class="...">新页面</a>
```

### 3.2 添加项目日志

编辑 `_data/logs.yml`：

```yaml
- date: "2026-03-30"
  type: "feat"           # feat | code | api | refactor
  title_zh: "新功能标题"
  title_en: "New Feature Title"
  desc_zh: "功能描述"
  desc_en: "Feature description"
```

**Type 类型说明：**

| 类型 | 颜色 | 用途 |
|------|------|------|
| `feat` | 蓝色 | 新功能 |
| `code` | 绿色 | 代码优化 |
| `api` | 紫色 | API 变更 |
| `refactor` | 橙色 | 重构 |

### 3.3 添加社交链接

编辑 `_data/socials.yml`：

```yaml
- name: "GitHub"
  icon: "fa-github"           # Font Awesome 图标
  url: "https://github.com/halfism"
  color: "hover:bg-gray-700"  # 悬停背景色
```

### 3.4 添加证书

编辑 `_data/certificates.yml`：

```yaml
- title_zh: "证书中文名"
  title_en: "Certificate Name"
  issuer: "颁发机构"
  date: "2026-03"
  icon: "fa-certificate"
  color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
  url: "https://证书链接.com"
```

### 3.5 添加博客文章

在 `_posts` 目录创建文件：

```markdown
---
layout: post
title: "博客标题"
date: 2026-03-29
categories: [技术, 随笔]
tags: [Jekyll, Web]
---

文章正文内容...

<!-- more -->

摘要分隔线后的内容
```

### 3.6 自定义配色

编辑 `_layouts/default.html` 中的 Tailwind 配置：

```javascript
tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#165DFF',
                    DEFAULT: '#165DFF'
                },
                dark: {
                    bg: '#0d1117',
                    card: '#161b22',
                    border: '#30363d'
                }
            }
        }
    }
}
```

---

## 4. 测试指南

### 4.1 本地测试

```bash
# 1. 启动开发服务器
bundle exec jekyll serve

# 2. 测试各页面
# - 首页 (/)
# - 英文版 (/index_en.html)
# - 博客 (/blog.html)
# - 相册 (/gallery.html)

# 3. 测试响应式
# - 移动端视图
# - 平板视图
# - 桌面视图
```

### 4.2 功能测试清单

| 功能 | 测试项 | 预期结果 |
|------|--------|----------|
| 暗色模式 | 点击切换按钮 | 整个页面切换 |
| 语言切换 | 点击语言选择器 | 切换到对应页面 |
| 返回顶部 | 滚动后点击按钮 | 平滑滚动到顶部 |
| 博客文章 | 点击文章标题 | 进入文章详情页 |
| 图片上传 | 上传新图片 | 显示在相册中 |
| 链接跳转 | 点击外部链接 | 新标签页打开 |

### 4.3 浏览器兼容性

| 浏览器 | 测试版本 | 备注 |
|--------|----------|------|
| Chrome | 最新版 | 主要测试 |
| Firefox | 最新版 | 兼容测试 |
| Safari | 最新版 | macOS/iOS |
| Edge | 最新版 | Chromium 内核 |

### 4.4 移动端测试

使用浏览器开发者工具：

1. 按 F12 打开 DevTools
2. 点击设备模拟图标
3. 测试常用分辨率：
   - iPhone SE: 375 x 667
   - iPhone 14: 390 x 844
   - iPad: 768 x 1024

---

## 5. 部署指南

### 5.1 自动部署

推送到 `main` 分支后，GitHub Pages 自动部署：

```bash
# 1. 添加远程仓库（如果需要）
git remote add origin https://github.com/halfism/halfism.github.io.git

# 2. 提交更改
git add .
git commit -m "feat: 新功能"

# 3. 推送到 GitHub
git push origin main
```

部署状态：https://github.com/halfism/halfism.github.io/deployments

### 5.2 手动部署（备选）

```bash
# 1. 本地构建
bundle exec jekyll build

# 2. 使用 GitHub CLI
gh workflow run pages.yml

# 3. 或手动上传 _site 内容
```

### 5.3 自定义域名

1. 添加 `CNAME` 文件：

```
halfism.com
```

2. 配置 DNS：
   - 添加 CNAME 记录指向 `halfism.github.io`

3. GitHub 设置：
   - Settings → Pages → Custom domain → 输入域名
   - 启用 HTTPS

---

## 6. 常见问题

### 6.1 构建问题

**Q: `bundle install` 失败**

```bash
# 清理并重新安装
bundle clean --force
bundle install
```

**Q: Jekyll 构建报错**

```bash
# 检查 Ruby 版本
ruby -v  # 需要 2.7+

# 清理缓存
bundle exec jekyll clean
```

### 6.2 显示问题

**Q: 样式不生效**

1. 检查 Tailwind CDN 是否加载
2. 清除浏览器缓存
3. 禁用缓存刷新 (Ctrl+Shift+R)

**Q: 暗色模式不切换**

1. 检查浏览器控制台错误
2. 确认 `darkMode: 'class'` 配置
3. 检查 `toggleTheme()` 函数调用

### 6.3 部署问题

**Q: 部署后页面 404**

- 确认仓库名为 `username.github.io`
- 检查 `main` 分支是否有内容

**Q: 样式错乱**

- 确认使用正确的 baseurl
- 检查 `_config.yml` 配置

---

## 7. 工具脚本

### 7.1 开发脚本

```bash
# 启动开发 (带 livereload)
alias dev='bundle exec jekyll serve --livereload'

# 清理并构建
alias clean-build='bundle exec jekyll clean && bundle exec jekyll build'

# 提交并推送
alias gp='git add . && git commit -m "$(date +%Y-%m-%d) update" && git push'
```

添加到 `~/.bashrc` 或 `~/.zshrc` 使用。

### 7.2 快捷命令

```bash
# 新功能分支
git checkout -b feature/新功能

# 合并到 main
git checkout main
git merge feature/新功能
git push origin main

# 删除本地分支
git branch -d feature/新功能
```

---

## 8. 维护清单

### 8.1 定期任务

| 任务 | 频率 | 说明 |
|------|------|------|
| 更新依赖 | 每月 | `bundle update` |
| 检查 Broken Link | 每月 | 使用在线工具 |
| 更新博客 | 按需 | 保持内容新鲜 |
| 备份配置 | 每季度 | 导出重要配置 |

### 8.2 内容更新

- [ ] 更新个人介绍
- [ ] 添加新项目
- [ ] 更新技能列表
- [ ] 添加新博客
- [ ] 更新联系方式

### 8.3 安全检查

- [ ] 检查 GitHub 安全提醒
- [ ] 更新 Gem 依赖
- [ ] 审核外部链接
- [ ] 检查敏感信息泄露

---

## 9. 参考资源

### 9.1 官方文档

- [Jekyll 文档](https://jekyllrb.com/docs/)
- [Tailwind CSS](https://tailwindcss.com/)
- [GitHub Pages](https://docs.github.com/en/pages)

### 9.2 学习资源

- [Liquid 模板语言](https://shopify.github.io/liquid/)
- [Font Awesome](https://fontawesome.com/v4/icons/)

### 9.3 工具

- [Google Fonts](https://fonts.google.com/)
- [Can I Use](https://caniuse.com/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

**文档版本历史**

| 版本 | 日期 | 修改内容 |
|------|------|----------|
| v1.0 | 2026-03-29 | 初始版本 |
