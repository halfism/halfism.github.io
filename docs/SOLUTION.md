# halfism.github.io - 技术方案文档

> 版本: v1.0 | 日期: 2026-03-29 | 状态: 草稿

---

## 1. 技术栈选型

### 1.1 核心技术

| 技术 | 版本 | 用途 | 选择理由 |
|------|------|------|----------|
| **Jekyll** | 4.x | 静态站点生成 | GitHub Pages 原生支持，无需构建 |
| **Tailwind CSS** | 3.x (CDN) | 样式框架 | 原子化 CSS，快速开发 |
| **Font Awesome** | 4.7 | 图标库 | 生态丰富，CDN 可用 |
| **Google Fonts** | - | 字体 | Inter 字体，专业美观 |

### 1.2 可选技术对比

#### 静态站点生成器

| 方案 | 优点 | 缺点 | 适用场景 |
|------|------|------|----------|
| **Jekyll** ✅ | GitHub 原生支持，插件丰富 | Ruby 依赖，生成慢 | GitHub Pages 首选 |
| Hugo | 生成极快 | 学习曲线陡峭 | 大型站点 |
| Gatsby | React 生态 | 配置复杂 | React 开发者 |
| Next.js | SSR/SSG 灵活 | 需 Node 部署 | 需要 SEO 优化 |

**结论**：选择 Jekyll，契合 GitHub Pages 生态。

#### CSS 框架

| 方案 | 优点 | 缺点 | 适用场景 |
|------|------|------|----------|
| **Tailwind CSS** ✅ | 原子化，无冲突 | HTML 可读性下降 | 快速开发，定制化 |
| Bootstrap | 组件丰富 | 默认样式难覆盖 | 快速原型 |
| UnoCSS | 极快，按需 | 社区较小 | 高级用户 |
| 纯 CSS | 无依赖 | 开发慢 | 学习目的 |

**结论**：选择 Tailwind CSS CDN 版本，无需构建步骤。

---

## 2. 项目结构

### 2.1 目录结构

```
halfism.github.io/
├── _layouts/              # 页面布局
│   └── default.html       # 默认布局
├── _includes/             # 可复用组件
│   ├── header.html        # 导航栏
│   └── footer.html        # 页脚
├── _data/                 # 数据文件
│   ├── logs.yml           # 项目日志
│   ├── socials.yml        # 社交链接
│   └── certificates.yml   # 证书数据
├── _posts/                # 博客文章
├── assets/                # 静态资源
│   ├── css/
│   │   └── style.css     # 自定义样式
│   ├── js/
│   │   └── main.js       # 自定义脚本
│   └── images/           # 图片资源
├── docs/                  # 文档
│   ├── PROTOTYPE.md      # UI 原型
│   ├── SOLUTION.md       # 本文档
│   └── DEVELOPMENT.md    # 开发文档
├── index.html             # 中文首页
├── index_en.md           # 英文首页
├── blog.html             # 博客页面
├── gallery.html          # 相册页面
├── _config.yml           # Jekyll 配置
├── Gemfile               # Ruby 依赖
└── CNAME                 # 自定义域名
```

### 2.2 文件说明

| 路径 | 说明 | 模板变量 |
|------|------|----------|
| `index.html` | 中文首页，Markdown + HTML 混合 | `page.lang == 'zh'` |
| `index_en.md` | 英文首页 | `page.lang == 'en'` |
| `blog.html` | 博客列表页 | `site.posts` |
| `gallery.html` | 相册页，纯前端 | localStorage |
| `_layouts/default.html` | 基础布局 | `{{ content }}` |

---

## 3. 功能模块设计

### 3.1 模块架构

```
┌─────────────────────────────────────────────────────────┐
│                      页面层 (Pages)                       │
│  index.html | index_en.md | blog.html | gallery.html    │
├─────────────────────────────────────────────────────────┤
│                      布局层 (Layouts)                    │
│                      default.html                        │
│  ┌─────────────────────────────────────────────────┐   │
│  │  Header │         Content         │  Footer    │   │
│  │ 导航栏  │     各页面具体内容        │   页脚    │   │
│  └─────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────┤
│                      数据层 (Data)                       │
│  logs.yml | socials.yml | certificates.yml             │
├─────────────────────────────────────────────────────────┤
│                      资源层 (Assets)                     │
│  CSS (Tailwind CDN + style.css) | JS (main.js)         │
└─────────────────────────────────────────────────────────┘
```

### 3.2 数据模型

#### 项目日志 (logs.yml)

```yaml
- date: "YYYY-MM-DD"           # 日期
  type: "feat|code|api|refactor"  # 类型
  title_zh: "中文标题"          # 中文标题
  title_en: "English Title"    # 英文标题
  desc_zh: "中文描述"           # 中文描述
  desc_en: "English Description" # 英文描述
```

#### 社交链接 (socials.yml)

```yaml
- name: "GitHub"               # 显示名称
  icon: "fa-github"            # Font Awesome 图标
  url: "https://github.com/..."  # 链接
  color: "hover:bg-gray-700"   # 悬停颜色类
```

#### 证书 (certificates.yml)

```yaml
- title_zh: "证书名称"         # 中文名称
  title_en: "Certificate Name" # 英文名称
  issuer: "颁发机构"           # 颁发机构
  date: "YYYY-MM"             # 获得日期
  icon: "fa-icon"             # 图标
  color: "bg-blue-100 ..."    # 颜色类
  url: "https://..."          # 证书链接
```

---

## 4. 主题系统

### 4.1 主题架构

```
┌─────────────────────────────────────────────────────────┐
│                   Tailwind CSS                         │
│                   darkMode: 'class'                    │
├─────────────────────────────────────────────────────────┤
│                     HTML 元素                           │
│              <html class="dark">                        │
│                   ↕ 切换                               │
│               toggleTheme()                            │
├─────────────────────────────────────────────────────────┤
│                  CSS 变量 (fallback)                   │
│  --color-primary / --color-bg / --color-text ...      │
└─────────────────────────────────────────────────────────┘
```

### 4.2 主题切换流程

```
1. 页面加载
   ↓
2. <head> 中脚本执行 (最早)
   ├─ 读取 localStorage.getItem('theme')
   ├─ 或检测 window.matchMedia('(prefers-color-scheme: dark)')
   └─ 设置 html.classList.add/remove('dark')
   ↓
3. Tailwind 读取 .dark 类
   ↓
4. 应用 dark: 变体样式
```

### 4.3 主题配置

```javascript
// _layouts/default.html

// Tailwind 配置
tailwind.config = {
    darkMode: 'class',  // 关键：启用 class 模式
    theme: { ... }
}

// 初始化脚本 (在 <head> 最前面)
(function() {
    var theme = localStorage.getItem('theme') ||
                (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
    }
})();

// 切换函数
function toggleTheme() {
    var isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}
```

---

## 5. 多语言方案

### 5.1 实现方式

采用 **多页面 + 数据驱动** 方案：

| 页面 | 语言 | URL |
|------|------|-----|
| `index.html` | 中文 | `/` |
| `index_en.md` | 英文 | `/index_en.html` |

### 5.2 内容适配

```liquid
{% if page.lang == 'en' %}
    <!-- 英文内容 -->
{% else %}
    <!-- 中文内容 -->
{% endif %}
```

### 5.3 数据适配

```liquid
{% for cert in site.data.certificates %}
    {% if page.lang == 'en' %}
        {{ cert.title_en }}
    {% else %}
        {{ cert.title_zh }}
    {% endif %}
{% endfor %}
```

### 5.4 导航适配

```liquid
{% if page.lang == 'en' %}
    <a href="/index_en.html#section">English</a>
{% else %}
    <a href="/">中文</a>
{% endif %}
```

---

## 6. 相册功能

### 6.1 数据存储

```javascript
// 使用 localStorage 存储
const STORAGE_KEY = 'halfism_gallery';

// 数据结构
{
    images: [
        {
            id: "uuid",
            title: "图片标题",
            category: "web|app|illustration|photo",
            src: "base64 或 URL",
            timestamp: 1711700000
        }
    ]
}
```

### 6.2 功能列表

| 功能 | 描述 | 实现方式 |
|------|------|----------|
| 上传图片 | 添加新图片 | FileReader API |
| 分类展示 | 按类型筛选 | CSS 过滤 |
| 删除图片 | 移除图片 | 数组操作 |
| 重排序 | 拖拽排序 | HTML5 Drag API |
| 本地持久化 | 保存到 localStorage | JSON.stringify |

---

## 7. SEO 优化

### 7.1 Meta 标签

```html
<title>{% if page.title %}{{ page.title }} | {% endif %}{{ site.title }}</title>
<meta name="description" content="{{ site.description }}">
<meta name="author" content="{{ site.github_username }}">
<meta name="robots" content="index, follow">
```

### 7.2 结构化数据

```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "halfism",
    "url": "https://halfism.github.io",
    "sameAs": [
        "https://github.com/halfism",
        "https://twitter.com/halfism_dev"
    ]
}
</script>
```

### 7.3 Sitemap

通过 `jekyll-sitemap` 插件自动生成。

---

## 8. 性能优化

### 8.1 资源加载策略

| 资源 | 策略 | 实现 |
|------|------|------|
| Tailwind CSS | CDN | 缓存友好 |
| Font Awesome | CDN | 异步加载 |
| Google Fonts | 预连接 | `<link rel="preconnect">` |
| 图片 | 懒加载 | `loading="lazy"` |
| JavaScript | DOMContentLoaded 后 | 避免阻塞渲染 |

### 8.2 缓存策略

GitHub Pages 默认提供：
- 静态资源：1 年缓存
- HTML 文件：不缓存（确保更新）

### 8.3 关键渲染路径

```
1. HTML 下载
   ↓
2. <head> 执行
   ├─ Tailwind CDN 加载
   ├─ 主题初始化
   └─ 阻塞渲染
   ↓
3. <body> 渲染
   ↓
4. DOMContentLoaded
   ├─ 交互初始化
   └─ 动画启动
```

---

## 9. 部署流程

### 9.1 自动部署

```
代码推送到 main 分支
        ↓
GitHub Actions 检测变更
        ↓
Jekyll 构建站点
        ↓
GitHub Pages 部署
        ↓
网站上线 (https://halfism.github.io)
```

### 9.2 手动构建（可选）

```bash
# 本地预览
bundle exec jekyll serve

# 构建生产版本
bundle exec jekyll build

# 部署到 _site 目录
```

### 9.3 自定义域名

1. 在 `CNAME` 文件添加域名
2. 在 DNS 添加 CNAME 记录
3. 在 GitHub Pages 设置中启用

---

## 10. 安全考虑

### 10.1 内容安全

- 所有内容为公开静态页面
- 不存储敏感信息
- 无后端依赖

### 10.2 CSP 策略

```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com; 
               style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://fonts.googleapis.com; 
               font-src 'self' https://fonts.gstatic.com; 
               img-src 'self' data: https:;">
```

### 10.3 外部链接

- 所有外部链接使用 `target="_blank"`
- 添加 `rel="noopener noreferrer"` 防止安全问题

---

## 11. 监控与分析（可选）

### 11.1 GitHub 内置分析

- Repository Insights
- Traffic Analytics

### 11.2 第三方分析

| 服务 | 隐私友好 | 免费额度 |
|------|----------|----------|
| Plausible | ✅ | 10k 页面浏览 |
| Fathom | ✅ | 10k 页面浏览 |
| Google Analytics | ❌ | 无限 |

---

## 12. 未来扩展

### 12.1 可选功能

| 功能 | 优先级 | 实现难度 |
|------|--------|----------|
| 博客评论 (Disqus/Giscus) | P2 | 低 |
| 搜索功能 | P2 | 中 |
| 暗黑模式自动跟随系统 | P1 | 低 |
| PWA 支持 | P3 | 中 |
| RSS 订阅 | P2 | 低 |
| 站点地图 | P1 | 低 |

### 12.2 性能升级

| 优化项 | 说明 |
|--------|------|
| 图片 CDN | 使用 Cloudflare/Imgix |
| 静态资源 CDN | 多地域加速 |
| 关键 CSS 内联 | 减少请求 |

---

**文档版本历史**

| 版本 | 日期 | 修改内容 |
|------|------|----------|
| v1.0 | 2026-03-29 | 初始版本 |
