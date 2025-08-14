# Starlight Redirect / 星光引航

![Screenshot_20250815_011639.jpg](https://youke1.picui.cn/s1/2025/08/15/689e1af74c1e7.jpg)

A lightweight and elegant website redirection tool that intelligently detects the fastest site and redirects users seamlessly. / 一个轻量而优雅的网站跳转工具，通过智能检测最快站点，为用户提供无缝导航体验。

## ✨ Features / 功能亮点

- [x] **Intelligent Site Detection / 智能站点检测**: Automatically tests multiple sites (e.g., Baidu homepage, images, news) and redirects to the fastest one based on latency. / 自动检测多个站点（如百度主页、图片、新闻），根据延迟跳转到最快站点。
- [x] **Customizable Themes / 可自定义主题**: Default peach theme color (`#F0BE96`) and black background (`#000000`), with support for custom colors and image backgrounds. / 默认桃色主题（`#F0BE96`）和纯黑背景（`#000000`），支持自定义颜色和图片背景。
- [x] **Glassmorphism Design / 玻璃态设计**: Modern UI with glassmorphism effects, ensuring a visually appealing experience. / 现代玻璃态效果界面，视觉体验优雅。
- [x] **Mobile-Friendly / 移动端适配**: Responsive design optimized for mobile devices with vertical button layout on small screens. / 响应式设计，优化移动端体验，小屏幕上按钮垂直排列。
- [x] **Optimized for China / 中国大陆优化**: Uses reliable CDNs (cdnjs, jsDelivr) for Font Awesome 6 icons and handles network restrictions effectively. / 使用可靠CDN（cdnjs、jsDelivr）加载Font Awesome 6图标，适配中国大陆网络环境。
- [x] **Robust Latency Testing / 可靠延迟测试**: Combines `fetch` (no-cors) and `Image` object testing with 5 retries and 3-second timeouts for accurate results. / 结合`fetch`（no-cors）和`Image`对象测试，5次重试、3秒超时，确保延迟测试准确。
- [x] **Open Source / 开源**: Well-documented code with detailed comments, inviting community contributions. / 代码注释详细，欢迎社区贡献。

## 项目结构

```
starlight-redirect/
├── index.html
├── style.css
├── script.js
```

## 开始使用

### **Clone the Repository / 克隆仓库**:

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
