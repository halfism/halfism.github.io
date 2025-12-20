# halfism.github.io

个人作品集网站，使用 Jekyll 构建并托管在 GitHub Pages 上。

## 简介

这是一个现代化的个人作品集网站，展示了我的技能、项目经验和摄影作品。网站采用响应式设计，可以在各种设备上完美显示。

主要特性：
- 响应式设计，适配桌面端和移动端
- 多语言支持（英语/中文切换）
- 项目展示区，展示技术栈和项目详情
- 技能雷达图和进度条展示技术能力
- 图片画廊，展示旅行、自然和技术活动照片
- 联系表单和社交媒体链接

## 技术栈

- [Jekyll](https://jekyllrb.com/) - 静态网站生成器
- [Tailwind CSS](https://tailwindcss.com/) - CSS 框架
- [Font Awesome](https://fontawesome.com/) - 图标库
- [Chart.js](https://www.chartjs.org/) - 图表库
- GitHub Pages - 托管服务

## 项目结构

```
.
├── _config.yml          # Jekyll 配置文件
├── index.html           # 主页（英文版）
├── index_en.html        # 英文版主页
├── index_zh.html        # 中文版主页
├── gallery.html         # 图片画廊页面
├── README.md            # 项目说明文档
└── img/                 # 图片资源目录
    ├── travel/          # 旅行相册
    ├── nature/          # 自然相册
    └── tech/            # 技术活动相册
```

## 本地运行

确保已安装 Ruby 和 Jekyll：

```bash
# 安装依赖
bundle install

# 本地运行
bundle exec jekyll serve

# 或者使用
jekyll serve
```

访问 http://localhost:4000 查看网站。

## 配置说明

在 [_config.yml](_config.yml) 文件中可以配置以下内容：

- 站点标题和描述
- 社交媒体用户名
- Google Analytics 跟踪 ID
- SEO 设置
- 插件配置

## 页面说明

### 主页 ([index.html](index.html))

主页包含以下部分：
- 个人简介和联系方式
- 技能展示（雷达图和详细列表）
- 项目展示（6个示例项目）
- 联系方式和表单

### 画廊页面 ([gallery.html](gallery.html))

画廊页面展示了三个不同主题的相册：
- 旅行相册
- 自然风光
- 技术活动

每个相册都有灯箱效果查看大图功能。

### 多语言支持

网站支持中英文切换：
- 英文版：[index.html](index.html) 和 [index_en.html](index_en.html)
- 中文版：[index_zh.html](index_zh.html)

## 自定义内容

要自定义网站内容，可以修改以下文件：

1. **个人信息**：修改 [_config.yml](_config.yml) 中的站点信息
2. **主页内容**：编辑 [index.html](index.html) 文件
3. **画廊图片**：替换 [img](img/) 目录下的图片
4. **项目信息**：修改主页中的项目卡片部分
5. **技能信息**：修改主页中的技能展示部分

## 部署

网站自动部署到 GitHub Pages，只需将更改推送到 `main` 分支即可。

## 许可证

该项目基于 MIT 许可证开源，详情请见 [LICENSE](LICENSE) 文件。