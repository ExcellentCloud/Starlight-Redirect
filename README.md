# Starlight Redirect / 星光引航

![Starlight Redirect](https://imgloc.com/image/t40Np) <!-- 可替换为实际截图 -->

A lightweight and elegant website redirection tool that intelligently detects the fastest site and redirects users seamlessly. / 一个轻量而优雅的网站跳转工具，通过智能检测最快站点，为用户提供无缝导航体验。

---

## ✨ Features / 功能亮点

- [x] **Intelligent Site Detection / 智能站点检测**: Automatically tests multiple sites (e.g., Baidu homepage, images, news) and redirects to the fastest one based on latency. / 自动检测多个站点（如百度主页、图片、新闻），根据延迟跳转到最快站点。
- [x] **Customizable Themes / 可自定义主题**: Default peach theme color (`#F0BE96`) and black background (`#000000`), with support for custom colors and image backgrounds. / 默认桃色主题（`#F0BE96`）和纯黑背景（`#000000`），支持自定义颜色和图片背景。
- [x] **Glassmorphism Design / 玻璃态设计**: Modern UI with glassmorphism effects, ensuring a visually appealing experience. / 现代玻璃态效果界面，视觉体验优雅。
- [x] **Mobile-Friendly / 移动端适配**: Responsive design optimized for mobile devices with vertical button layout on small screens. / 响应式设计，优化移动端体验，小屏幕上按钮垂直排列。
- [x] **Optimized for China / 中国大陆优化**: Uses reliable CDNs (cdnjs, jsDelivr) for Font Awesome 6 icons and handles network restrictions effectively. / 使用可靠CDN（cdnjs、jsDelivr）加载Font Awesome 6图标，适配中国大陆网络环境。
- [x] **Robust Latency Testing / 可靠延迟测试**: Combines `fetch` (no-cors) and `Image` object testing with 5 retries and 3-second timeouts for accurate results. / 结合`fetch`（no-cors）和`Image`对象测试，5次重试、3秒超时，确保延迟测试准确。
- [x] **Open Source / 开源**: Well-documented code with detailed comments, inviting community contributions. / 代码注释详细，欢迎社区贡献。

---

## 📖 Introduction / 简介

**Starlight Redirect** (星光引航) is a beautifully crafted tool designed to enhance web navigation by intelligently selecting the fastest available site for redirection. With a sleek glassmorphism UI, customizable themes (default: peach `#F0BE96`, black background `#000000`), and support for image backgrounds, it offers both functionality and aesthetics. Optimized for the Chinese internet environment, it ensures reliable performance with Font Awesome 6 icons (`fa-solid fa-rocket`) and robust latency testing. Ideal for developers and users seeking a seamless, visually appealing redirection experience.

**星光引航** 是一个精心设计的网站跳转优化工具，通过智能检测多个站点的响应速度，自动选择最优路径进行跳转。采用现代化的玻璃态设计，默认桃色主题（`#F0BE96`）和纯黑背景（`#000000`），支持自定义图片背景，确保视觉与功能的完美融合。针对中国大陆网络环境优化，使用可靠的CDN加载Font Awesome 6图标（`fa-solid fa-rocket`），并提供稳健的延迟测试。适合追求极致性能与美学的开发者和用户。

---

## 🚀 Usage / 使用方法

### 1. Setup / 安装
1. **Clone the Repository / 克隆仓库**:
   ```bash
   git clone https://github.com/your-username/starlight-redirect.git
   cd starlight-redirect