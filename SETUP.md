# 🚀 网站部署与配置指南

本指南帮助你完成网站的最后配置步骤，让所有功能正常运行。

---

## 📋 目录

1. [Formspree 联系表单配置](#formspree-联系表单配置)
2. [PWA 图标生成](#pwa-图标生成)
3. [Giscus 评论系统配置](#giscus-评论系统配置)
4. [Google Analytics 配置](#google-analytics-配置)
5. [个人信息自定义](#个人信息自定义)
6. [博客内容管理](#博客内容管理)

---

## 📧 1. Formspree 联系表单配置

### 步骤 1：注册 Formspree 账号

1. 访问 [https://formspree.io/](https://formspree.io/)
2. 点击 **"Get Started Free"** 或 **"Sign Up"**
3. 使用 GitHub / Google 账号注册（推荐）

### 步骤 2：创建新表单

1. 登录后点击 **"New Form"**
2. 表单名称填写：`halfism-contact`
3. 点击 **"Create"**

### 步骤 3：获取 Form ID

创建成功后，你会看到类似这样的信息：

```
Your form endpoint is:
https://formspree.io/f/xxxxxxxxxxxx
```

**复制 `f/` 后面的字符串**（即 `xxxxxxxxxxxx`）

### 步骤 4：更新配置文件

编辑 `_config.yml` 文件：

```yaml
# Contact Form Settings (Formspree)
contact:
  form_id: "你的实际Form_ID"  # 替换为从 Formspree 获取的 ID
```

**示例：**

```yaml
contact:
  form_id: "mzbnqkwa"  # 这只是一个示例，请替换为你的实际 ID
```

### 步骤 5：测试表单

1. 提交更改到 GitHub
2. 等待 GitHub Actions 部署完成（约 2 分钟）
3. 访问 `/contact/` 页面
4. 填写表单并提交
5. 检查 Formspree Dashboard 是否收到消息

### 高级配置（可选）

#### 自定义重定向页面

在表单 HTML 中添加隐藏字段：

```html
<input type="hidden" name="_next" value="/thank-you/" />
```

#### 邮件通知

在 Formspree Dashboard → Settings → Notifications：

- 开启邮件通知
- 设置接收邮箱（默认使用注册邮箱）
- 配置邮件模板

#### 反垃圾保护

Formspree 默认提供：
- ✅ Honeypot 字段（已集成）
- ✅ reCAPTCHA（可选开启）
- ✅ 发送频率限制

---

## 📱 2. PWA 图标生成

### 方法 A：使用在线工具（推荐）

#### 使用 RealFaviconGenerator

1. 准备一张 **512×512px** 的正方形图片（PNG 或 SVG）
   - 可以是 logo、头像或品牌标识
   - 推荐使用透明背景或纯色背景

2. 访问 [https://realfavicongenerator.net/](https://realfavicongenerator.net/)

3. 上传你的图片

4. 配置选项：
   - **Settings for Android Chrome**
     - ✅ Generate Android icons
     - ✅ Generate Apple touch icon
     - ✅ Generate favicon.ico
     - Background color: `#3b82f6`（你的主题色）

5. 点击 **"Generate your Favicons and HTML code"**

6. 下载生成的包，解压后：

```bash
# 将图标文件复制到正确位置
cp favicon_package_v0.16/android-chrome-* assets/img/icons/
cp favicon_package_v0.16/apple-touch-icon.png assets/img/icons/
cp favicon_package_v0.16/favicon.ico assets/img/

# 文件重命名规则：
android-chrome-72x72.png → icon-72x72.png
android-chrome-96x96.png → icon-96x96.png
android-chrome-128x128.png → icon-128x128.png
android-chrome-144x144.png → icon-144x144.png
android-chrome-152x152.png → icon-152x152.png
android-chrome-192x192.png → icon-192x192.png
android-chrome-384x384.png → icon-384x384.png
android-chrome-512x512.png → icon-512x512.png
```

7. 提交到 GitHub

#### 使用 PWA Asset Generator (CLI)

如果你熟悉 Node.js：

```bash
# 安装工具
npm install -g pwa-asset-generator

# 生成所有尺寸的图标
pwa-asset-generator \
    assets/img/icons/icon-source.svg \
    assets/img/icons/ \
    --type png \
    --background "#3b82f6" \
    --padding 15% \
    --maskable

# 自动生成所有需要的尺寸！
```

### 方法 B：手动创建（快速方案）

如果暂时没有合适的图片，可以使用占位符图标。我已经为你创建了 SVG 源文件：

**文件位置：** `assets/img/icons/icon-source.svg`

你可以：
1. 用任何图像编辑软件打开
2. 导出为不同尺寸的 PNG
3. 或者暂时跳过此步骤（PWA 功能仍可工作，只是图标会显示浏览器默认图标）

### 方法 C：使用 Figma/Sketch 设计

如果你有设计稿：

1. 创建 **512×512px** 的画布
2. 居中放置 logo（建议占用 80% 空间）
3. 导出时保留安全边距（padding: 15-20%）
4. 导出为 PNG 格式
5. 使用上述方法生成多尺寸图标

### 图标要求清单

| 尺寸 | 文件名 | 用途 |
|------|--------|------|
| 72×72 | `icon-72x72.png` | Android 老版本 |
| 96×96 | `icon-96x96.png` | Google TV |
| 128×128 | `icon-128x128.png` | Chrome Web Store |
| 144×144 | `icon-144x144.png` | IE11 |
| 152×152 | `icon-152x152.png` | iOS Safari |
| 192×192 | `icon-192x192.png` | Android/Chrome |
| 384×384 | `icon-384x384.png` | iPad Retina |
| 512×512 | `icon-512x512.png` | Android Adaptive |

**最佳实践：**
- ✅ 使用矢量源文件（SVG）确保清晰度
- ✅ 保持简洁的设计（在小尺寸下可识别）
- ✅ 测试在不同背景色下的显示效果
- ✅ 提供 maskable 版本（支持自适应形状）

---

## 💬 3. Giscus 评论系统配置

### 前置条件

1. **公开仓库**：`halfism/halfism.github.io` 必须是 public
2. **启用 Discussions**：
   - GitHub 仓库 → Settings → Features
   - ✅ 勾选 **Discussions**

### 配置步骤

1. 访问 [https://giscus.app/zh-CN](https://giscus.app/zh-CN)（中文界面）

2. **Step 1: 输入仓库地址**
   ```
   halfism/halfism.github.io
   ```

3. **Step 2: 选择 Discussions 分类**
   - 推荐：选择 **Announcements**（公告）
   - 或新建一个专门用于评论的分类

4. **Step 3: 配置选项**
   - Mapping: `pathname`（推荐）
   - Strict: `0`（宽松匹配）
   - Reactions: `✅` 启用
   - Emit metadata: `0`
   - Input position: `top`
   - Theme: `light`（跟随网站主题切换）
   - Language: `zh-CN`

5. **Step 4: 复制配置代码**

你会得到类似这样的数据：

```javascript
data-repo="halfism/halfism.github.io"
data-repo-id="R_xxxxxxxxxxxxxxxx"
data-category="Announcements"
data-category-id="DIC_xxxxxxxxxxxxx"
```

6. **更新 `_config.yml`**

```yaml
comments:
  enabled: true
  provider: giscus
  giscus:
    repo: halfism/halfism.github.io
    repo_id: "R_xxxxxxxxxxxxxxxx"      # 从 giscus.app 复制
    category: Announcements
    category_id: "DIC_xxxxxxxxxxxxx"     # 从 giscus.app 复制
    mapping: pathname
    strict: 0
    reactions_enabled: 1
    emit_metadata: 0
    input_position: top
    theme: light
    lang: zh-CN
    loading: lazy
```

### 测试评论功能

1. 提交配置更改
2. 打开任意一篇博客文章
3. 滚动到底部评论区
4. 使用 GitHub 账号登录并发表测试评论
5. 检查是否同步到仓库的 Discussions

### 自定义样式（可选）

在 `_layouts/post.html` 中可以添加自定义 CSS：

```css
.giscus-frame {
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}
```

---

## 📊 4. Google Analytics 配置

### 注册 GA4 账号

1. 访问 [Google Analytics](https://analytics.google.com/)
2. 登录 Google 账号
3. 点击 **"开始测量"**

### 创建媒体资源

1. **Account Name**: `halfism Portfolio`
2. **Property Name**: `halfism.github.io`
3. **URL**: `https://halfism.github.io`
4. **Industry Category**: `Computers & Electronics`
6. **Reporting Time Zone**: `China Standard Time`

### 获取 Measurement ID

创建完成后，你会在 **Data Streams → Web** 页面看到：

```
Measurement ID: G-XXXXXXXXXX
```

**复制这个 ID**

### 更新配置

编辑 `_config.yml`：

```yaml
google_analytics:
  enabled: true
  tracking_id: "G-XXXXXXXXXX"  # 替换为你的实际 Measurement ID
```

### 验证安装

1. 提交更改并等待部署
2. 访问你的网站
3. 在 GA4 Dashboard → **Realtime** 报告中查看活跃用户数
4. 应该能看到至少 1 个活跃用户（你自己）

### 可选增强功能

#### 事件追踪

GA4 已自动追踪：
- ✅ 页面浏览
- ✅ 滚动深度
- ✅ 外部链接点击

**自定义事件示例：**

```javascript
// 追踪 PWA 安装
gtag('event', 'pwa_installed', {
    'event_category': 'PWA',
    'event_label': 'App Installed'
});

// 追踪主题切换
gtag('event', 'theme_change', {
    'event_category': 'UI',
    'event_label': 'Dark Mode'
});
```

#### 转化目标设置

1. GA4 → **Configure** → **Events**
2. 标记重要事件为转化：
   - `contact_form_submit`
   - `blog_post_read`
   - `project_view`

---

## 👤 5. 个人信息自定义

### 编辑 `_config.yml`

```yaml
title: halfism | Personal Portfolio        # 网站标题
email: contact@halfism.dev                # 联系邮箱
description: >-
  一句话描述你自己和网站的定位

author:
  name: halfism                            # 你的名字
  avatar: /assets/img/avatar.png          # 头像路径
  bio_zh: 中文个人简介                      # 中文简介（100字左右）
  bio_en: English personal description     # 英文简介
  location: China                          # 所在城市
  employer: Freelancer                     # 公司/组织
  tagline_zh: 一句话标签                    # 如："全栈开发者 · 开源贡献者"
  tagline_en: Full-Stack Developer         # 英文标签
```

### 社交链接更新

```yaml
socials:
  github:
    username: halfism                      # 你的 GitHub 用户名
    url: https://github.com/halfism
    icon: fa-github
  twitter:
    username: halfism_dev                 # Twitter 用户名（不含@）
    url: https://twitter.com/halfism_dev
    icon: fa-twitter
  linkedin:
    username: halfism                     # LinkedIn 用户名
    url: https://linkedin.com/in/halfism
    icon: fa-linkedin
  email:
    url: mailto:contact@halfism.dev
    icon: fa-envelope
```

**添加更多社交平台：**

```yaml
socials:
  weibo:                                  # 微博
    username: halfism
    url: https://weibo.com/halfism
    icon: fa-weibo                         # 需要 Font Awesome 5+
  zhihu:                                   # 知乎
    username: halfism
    url: https://zhihu.com/people/halfism
    icon: fa-zhihu
  bilibili:                                # B站
    uid: 123456789
    url: https://space.bilibibili.com/123456789
    icon: fa-youtube                       # 使用近似图标
```

### 关于我页面更新

编辑 [`about.md`](about.md)，修改以下内容：

1. **经历时间线** - 更新真实的工作/学习经历
2. **技能列表** - 根据实际情况调整技能和熟练度
3. **有趣事实** - 更新真实的统计数据

### 项目数据更新

编辑 [`_data/projects.yml`](_data/projects.yml)：

```yaml
- id: 1
  title_zh: 你的真实项目名称
  title_en: Your Real Project Name
  description_zh: 详细描述项目的功能和价值
  description_en: Detailed project description
  image: https://your-image-url.com/image.jpg  # 项目截图
  tags:
    - React
    - Node.js
  category: 全栈应用
  url: https://github.com/halfism/your-project
  stars: 150                                 # 从 GitHub 获取真实数据
  forks: 30
```

### 博客文章撰写

在 `_posts/` 目录下创建新的 Markdown 文件：

**命名规则：** `YYYY-MM-DD-slug.md`

**必需的前置元数据（Front Matter）：**

```markdown
---
layout: post
title: "文章标题"
date: 2026-04-06 12:00:00 +0800
category: 分类名
tags:
  - 标签1
  - 标签2
image: https://picsum.photos/seed/your-post/800/400
excerpt: 文章摘要（150字以内）
---

# 正文开始...

使用 Markdown 语法撰写内容...
```

**支持的分类（Category）：**
- 教程
- 性能优化
- 前端开发
- 后端开发
- 工程实践
- 工具推荐
- 心得体会

---

## 🎨 6. 主题与样式自定义

### 修改颜色主题

编辑 [`assets/css/style.css`](assets/css/style.css)：

```css
:root {
    /* 主色调 */
    --color-primary: #3b82f6;           /* 改成你喜欢的颜色 */
    --color-primary-hover: #2563eb;

    /* 强调色 */
    --color-secondary: #06b6d4;          /* 辅助强调色 */
    --color-accent: #8b5cf6;            /* 特殊强调色 */

    /* 背景色 */
    --color-bg: #ffffff;                 /* 亮色模式背景 */
    --color-bg-secondary: #f9fafb;

    /* 文字颜色 */
    --color-text: #111827;              /* 主要文字 */
    --color-text-secondary: #4b5563;    /* 次要文字 */
}
```

**在线配色参考：**
- [Coolors](https://coolors.co/) - 配色方案生成器
- [Adobe Color](https://color.adobe.com/) - 色彩搭配工具
- [Flat UI Colors](https://flatuicolors.com/) - 扁平化色彩

### 修改字体

```css
:root {
    --font-sans: 'Inter', system-ui, sans-serif;  /* 正文字体 */
    --font-mono: 'Fira Code', monospace;          /* 代码字体 */
}
```

**Google Fonts 免费字体推荐：**
- Inter（现代无衬线）
- JetBrains Mono（代码）
- Noto Sans SC（中文）
- Lora（衬线体，适合阅读）

---

## 🔍 7. SEO 优化检查清单

### 必做项

- [ ] 更新 `site.title` 和 `site.description`
- [ ] 上传真实的 OG 图片到 `/assets/img/og-image.png`（1200×630px）
- [ ] 在 [Google Search Console](https://search.google.com/search-console) 验证网站
- [ ] 提交 sitemap（已自动生成于 `/sitemap.xml`）
- [ ] 检查移动端友好性（[Test](https://search.google.com/test/mobile-friendly)）

### 进阶优化

- [ ] 添加结构化数据（Schema.org）
- [ ] 创建 robots.txt 文件
- [ ] 设置 canonical URL
- [ ] 优化页面加载速度（< 3秒）

---

## 🛠️ 8. 故障排除

### 表单无法提交

**问题：** 提交后显示错误或没有收到邮件

**解决方案：**
1. 检查 `_config.yml` 中的 `form_id` 是否正确
2. 确认 Formspree 账户状态正常
3. 查看 Formspree Dashboard 的 Submissions 日志
4. 检查浏览器控制台是否有错误信息

### PWA 无法安装

**问题：** 浏览器不显示安装提示

**原因及解决：**
1. **未满足安装条件**
   - ✅ 网站必须通过 HTTPS（GitHub Pages 已支持）
   - ✅ 必须有有效的 manifest.json
   - ✅ 必须有 Service Worker 已激活
   - ✅ 用户需要与网站交互至少 30 秒

2. **缺少图标文件**
   - 确保 `manifest.json` 中引用的图标文件存在
   - 至少需要 192×192 和 512×512 两个尺寸

3. **手动安装（Chrome/Edge）**
   - 地址栏右侧点击安装图标 ⬇️
   - 或使用菜单：⋮ → "Install app"

### Giscus 不显示

**问题：** 评论区空白或报错

**解决方案：**
1. 确认仓库是 Public（Private 仓库不支持 Giscus）
2. 检查是否启用了 Discussions 功能
3. 验证 `repo_id` 和 `category_id` 是否正确
4. 清除浏览器缓存后刷新
5. 检查浏览器控制台错误信息

### Google Analytics 无数据

**问题：** GA4 Realtime 显示 0 活跃用户

**解决方案：**
1. 确认 `tracking_id` 格式正确（`G-XXXXXXXXXX`）
2. 检查 `_config.yml` 中 `enabled: true`
3. 使用隐私/无痕模式访问网站（避免本地缓存干扰）
4. 等待 24 小时（GA 数据有时延迟）
5. 检查 ad blocker 是否阻止了 GA 脚本

---

## 📞 获取帮助

如果遇到问题，可以通过以下方式获取帮助：

1. **查看日志**：GitHub Actions 构建日志
2. **社区支持**：
   - [Jekyll 官方论坛](https://talk.jekyllrb.com/)
   - [GitHub Discussions](https://github.com/halfism/halfism.github.io/discussions)
3. **提交 Issue**：在仓库的 Issues 页面报告问题

---

## ✅ 快速启动检查清单

完成以下步骤后，你的网站将完全就绪：

**基础配置：**
- [ ] 更新 `_config.yml` 中的个人信息
- [ ] 替换社交媒体链接为真实账号
- [ ] 上传个人头像到 `assets/img/avatar.png`

**功能启用：**
- [ ] 配置 Formspree 并测试联系表单
- [ ] 配置 Giscus 并测试评论功能
- [ ] 配置 Google Analytics 并验证数据接收
- [ ] 生成 PWA 图标并测试安装

**内容填充：**
- [ ] 撰写第一篇原创博客文章
- [ ] 更新项目展示数据为真实项目
- [ ] 更新关于页面的经历时间线

**优化完善：**
- [ ] 生成 OG 图片用于社交分享
- [ ] 提交网站到 Google Search Console
- [ ] 测试移动端显示效果
- [ ] 测试离线访问功能

---

**🎉 完成以上所有步骤后，恭喜你拥有了一个专业级的个人作品集网站！**

现在开始你的创作之旅吧！✨
