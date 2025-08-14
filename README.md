# Starlight Redirect / 星光引航

![Screenshot_20250815_011639.jpg](https://youke1.picui.cn/s1/2025/08/15/689e1af74c1e7.jpg)

A lightweight and elegant website redirection tool that intelligently detects the fastest site and redirects users seamlessly. / 一个轻量而优雅的网站跳转工具，通过智能检测最快站点，为用户提供无缝导航体验。

## 项目结构

```
src/
├── api/                # API接口
├── assets/             # 静态资源
│   └── styles/         # 样式文件
│       ├── base/       # 基础样式
│       ├── components/ # 组件样式
│       └── layouts/    # 布局样式
├── components/         # 公共组件
├── composables/        # 组合式API
├── i18n/               # 国际化
│   └── locales/        # 语言包
├── router/             # 路由配置
├── store/              # Vuex存储
├── utils/              # 工具函数
└── views/              # 页面视图
```

## 开始使用

### 安装依赖

```bash
npm install
```

### 开发环境运行

```bash
npm run serve
```

### 生产环境构建

```bash
npm run build
```

## 自定义配置

### 主题配置

主题颜色和其他配置可以在 `src/utils/baseConfig.js` 文件中修改。

### API配置

API基础URL可以在 `src/utils/baseConfig.js` 文件中修改。
