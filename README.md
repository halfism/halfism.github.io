# halfism.github.io

个人作品集网站，采用现代化设计风格，使用 Jekyll 构建并托管在 GitHub Pages 上。

## 简介

这是一个现代化的个人作品集网站，网站展示了我的技能、项目经验和摄影作品。

**主要特性：**

*   **现代化 UI 设计**：摒弃了过时的拟态风格，采用清爽的卡片式布局、渐变文字和精致的毛玻璃效果。
*   **深色模式支持**：完美支持亮色/深色主题切换，默认自动跟随系统偏好，并提供手动切换开关。
*   **多语言支持**：内置中文（默认）和英文双语支持，可一键切换语言环境。
*   **响应式布局**：基于 Tailwind 风格的实用类构建，在桌面、平板和移动设备上均有完美表现。
*   **丰富的展示模块**：
    *   **个人概览**：动态 Hero 区域。
    *   **技能雷达**：直观展示技术栈掌握情况。
    *   **项目作品**：卡片式展示个人项目。
    *   **画廊相册**：瀑布流/网格布局展示摄影作品（支持灯箱查看）。
    *   **博客系统**：分享技术文章与见解。

## 技术栈

*   **[Jekyll](https://jekyllrb.com/)** - 静态网站生成器
*   **HTML5 & CSS3** - 语义化标签与 CSS 变量（Custom Properties）实现主题切换
*   **Vanilla JavaScript** - 原生 JS 实现交互逻辑（无重型框架依赖）
*   **[Font Awesome](https://fontawesome.com/)** - 矢量图标库
*   **GitHub Pages** - 免费的静态托管服务

## 项目结构

```
.
├── _config.yml          # Jekyll 站点配置文件
├── _layouts/            # 页面布局模板
│   └── default.html     # 默认布局（包含主题切换逻辑）
├── _includes/           # 可复用组件
│   ├── header.html      # 顶部导航栏（含语言/主题开关）
│   └── footer.html      # 底部页脚
├── assets/
│   └── css/
│       └── style.css    # 核心样式表（CSS 变量、Utility Classes）
├── index.html           # 网站首页（默认中文）
├── index_en.md          # 英文版首页内容
├── index_zh.md          # 中文版首页内容（备份/源文件）
├── gallery.html         # 摄影画廊页面
├── blog.html            # 博客文章列表页
└── img/                 # 图片资源目录
```

## 本地运行

确保您的环境中已安装 Ruby 和 Jekyll。

1.  **安装依赖**

    ```bash
    bundle install
    ```

2.  **启动本地服务器**

    ```bash
    bundle exec jekyll serve
    ```

3.  **访问网站**

    打开浏览器访问 `http://localhost:4000` 即可查看效果。

## 自定义配置

您可以在 `_config.yml` 中修改以下配置：

*   **基本信息**：`title`, `email`, `description`, `github_username`
*   **构建设置**：`markdown`, `theme`, `plugins`

## 许可证

MIT License
