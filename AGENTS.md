# halfism Portfolio - Neumorphism + Glassmorphism

## 项目概览
基于原生 HTML/CSS/JS 构建的个人主页，采用拟态（Neumorphism）与毛玻璃（Glassmorphism）设计风格，灵感来源于浅色数据看板设计。

## 技术栈
- **HTML5** + **CSS3** (原生，无框架)
- **Font Awesome 4.7** (图标，CDN引入)
- **原生 JavaScript** (交互与动画)

## 项目结构
```
.
├── index.html          # 主页面 (包含所有区块)
├── styles/
│   └── main.css        # 核心样式 (拟态+毛玻璃)
└── .coze               # 项目配置
```

## 页面区块
1. **导航栏** - 毛玻璃效果固定导航
2. **Hero** - 个人介绍 + 浮动装饰卡片
3. **关于我** - 自我介绍 + 三大特征卡片
4. **精选项目** - 三列项目展示卡片
5. **技能** - 进度条 + 标签云
6. **GitHub统计** - 数据卡片 + 贡献图 + 技术栈分布
7. **专业认证** - 证书卡片
8. **迭代日志** - 时间线
9. **联系** - CTA 区域
10. **页脚** - 社交链接

## 设计系统
- **拟态风格**: `box-shadow` 双向投影 (`--neu-convex`, `--neu-concave`, `--neu-flat`, `--neu-pressed`)
- **毛玻璃效果**: `backdrop-filter: blur(16px)` + 半透明背景
- **配色**: 浅灰蓝基底 + 低饱和度蓝紫/青色点缀
- **圆角**: 12px~32px 统一圆角体系

## 开发与构建
- 开发: `python -m http.server 5000 --bind 0.0.0.0`
- 无构建步骤，纯静态文件
