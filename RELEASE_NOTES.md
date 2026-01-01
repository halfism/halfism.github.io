# Release Notes

All notable changes to this project will be documented in this file.

## [2.0.0] - 2026-01-02

### 🚀 Major Features (主要特性)

*   **现代化 UI 重构 (Modern UI Overhaul)**
    *   彻底移除了旧版的拟态风格 (Neumorphism)。
    *   采用了类似 Apple/Vue.js 的现代化扁平风格，引入了**毛玻璃效果 (Glassmorphism)**。
    *   使用了 Tailwind 风格的工具类和 CSS 变量重构了核心样式系统。

*   **多语言支持 (Multi-language Support)**
    *   新增了中英文双语支持。
    *   首页默认显示中文，可通过头部导航栏的下拉菜单无缝切换至英文版 (`index_en.md`)。
    *   导航链接和内容根据当前语言环境自动适配。

*   **深色模式 (Dark Mode)**
    *   实现了完善的深色/浅色主题切换功能。
    *   **自动检测**：首次访问自动跟随系统偏好设置。
    *   **手动切换**：头部导航栏集成了滑动开关，状态持久化保存至本地 (localStorage)。
    *   **视觉优化**：深色模式采用 GitHub 风格的深灰背景，确保舒适的阅读体验。

### 💅 UI/UX Improvements (体验优化)

*   **Header (导航栏)**
    *   参考 Vue/Vite 文档风格，重新设计了顶部导航。
    *   集成了下拉式语言切换菜单和平滑的暗色模式开关。
    *   增加了滚动时的背景模糊效果。

*   **Content (内容区域)**
    *   重构了 Hero 区域，增加了动态渐变文字和悬浮卡片动画。
    *   优化了“技能雷达”和“项目卡片”的视觉样式，增加了 Hover 交互效果。
    *   博客和画廊页面同步更新为现代化卡片布局。

### 🛠 Technical Changes (技术变动)

*   **Refactor**: 重构了 `_layouts/default.html`，移除了对 `neumorphism.css` 的依赖。
*   **Refactor**: `_includes/header.html` 和 `footer.html` 改为响应式布局，支持移动端汉堡菜单。
*   **Chore**: 更新了 `README.md` 文档，反映最新的技术栈和项目结构。
*   **File**: 新增 `index_en.md` (英文主页) 和 `index_zh.md` (中文主页源文件)。
