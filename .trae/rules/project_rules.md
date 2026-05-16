# halfism.github.io Project Rules

## 📋 自动提交规则

### ✅ 任务完成后自动提交

当任务完成时，**必须自动执行以下Git操作**：

#### 1. 提交更改
```bash
git add -A
git commit -m "<type>: <description>"
```

#### 2. 推送到GitHub
```bash
git push origin main
```

### 📝 Commit Message 格式规范

使用 **Conventional Commits** 规范：

```
<type>(<scope>): <subject>

<body>

<footer>
```

#### **Type 类型**
- `feat`: 新功能 (feature)
- `fix`: 修复bug (bug fix)
- `docs`: 文档更新 (documentation)
- `style`: 代码格式调整（不影响功能）(formatting)
- `refactor`: 重构代码（非新功能、非修复）
- `perf`: 性能优化 (performance)
- `test`: 添加测试 (tests)
- `chore`: 构建过程或辅助工具的变动
- `revert`: 回滚提交

#### **示例**
```
fix(theme): 修复主题切换时data-theme属性未同步的问题

问题：ThemeManager只切换.dark类但未设置data-theme属性，
导致图表、搜索框、PWA横幅等组件的主题切换不生效。

修复：在init()和toggle()方法中添加setAttribute('data-theme', theme)
```

## 🔧 项目特定规则

### 1. **代码风格**
- 使用 **2空格缩进**
- 变量命名：`camelCase`
- CSS类名：`kebab-case`
- 文件名：`kebab-case.html/.js/.css/.md`

### 2. **文件组织**
- 组件放在 `_includes/components/`
- 页面区块放在 `_includes/sections/`
- 布局模板放在 `_layouts/`
- 博客文章放在 `_posts/YYYY-MM-DD-title.md`
- 数据文件放在 `_data/`

### 3. **Jekyll 规范**
- 所有HTML include使用 `{% include %}` 标签
- 配置项优先从 `_config.yml` 读取
- 多语言支持使用 `{% if page.lang == 'en' %}` 条件判断

### 4. **前端技术栈**
- **CSS**: 使用CSS变量（Custom Properties）实现主题系统
- **JavaScript**: 原生JS，模块化设计，避免依赖框架
- **图标**: Font Awesome 4.7
- **字体**: 系统默认字体栈

### 5. **响应式设计**
- 移动端优先（Mobile First）
- 断点：`sm:640px`, `md:768px`, `lg:1024px`, `xl:1280px`
- 所有交互元素必须支持触摸操作

### 6. **无障碍性 (Accessibility)**
- 所有图片必须有 `alt` 属性
- 按钮和链接必须有清晰的 `aria-label`
- 支持键盘导航（Tab, Enter, Esc）
- 颜色对比度符合 WCAG AA 标准

### 7. **性能优化**
- 图片使用WebP格式（提供fallback）
- CSS/JS文件压缩后部署
- 关键资源预加载（preload/prefetch）
- Service Worker实现离线缓存

### 8. **SEO 最佳实践**
- 每个页面有唯一的 `<title>` 和 `<meta description>`
- 使用语义化HTML标签
- Open Graph 和 Twitter Card meta标签
- 结构化数据（Schema.org）

## 🚀 工作流程

### 开发流程
1. **任务分析**: 明确需求和影响范围
2. **代码修改**: 遵循项目架构和编码规范
3. **本地测试**: 验证功能正常（如可运行 `jekyll serve`）
4. **自动提交**: 执行 git commit & push
5. **验证部署**: 检查 GitHub Actions 构建状态

### 分支策略
- `main`: 生产环境分支（直接推送）
- 功能开发可直接在main进行（个人项目）

## ⚠️ 注意事项

1. **不要提交敏感信息**:
   - API Keys / Tokens
   - 密码或凭证
   - 个人隐私数据

2. **配置文件占位符**:
   - Formspree ID: 保持为 `xxxxxxxxxxxx`
   - Google Analytics ID: 保持为 `G-XXXXXXXXXX`
   - Giscus repo_id: 保持为空字符串

3. **日志记录**:
   - 所有模型交互日志保存在 `log/` 目录
   - 临时文件保留在 `tmp/` 目录

## 📦 版本管理

- 使用语义化版本号：`v3.0.0`
   - MAJOR: 架构重构或重大变更
   - MINOR: 新功能添加
   - PATCH: bug修复和小改进

---

**最后更新**: 2026-04-06  
**维护者**: halfism
