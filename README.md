# ⭐Starlight Redirect(星光引航)

![Screenshot_20250914_174254.jpg](https://s2.loli.net/2025/09/15/mCRKDc4AyJeMvL3.jpg)

  A lightweight and elegant website redirection tool that intelligently detects the fastest site and redirects users seamlessly.

  一个轻量而优雅的网站跳转工具，通过智能检测最快站点，为用户提供无缝导航体验。

👋 Demo / 演示：[Start](https://excellentcloud.github.io/Starlight-Redirect/)

## ✨ Features / 功能亮点

:heavy_check_mark: **智能站点检测 / Intelligent Site Detection**: Automatically tests multiple sites (e.g., Baidu homepage, images, news) using `fetch` HEAD requests and redirects to the fastest one based on latency (3 retries, 3s timeout). / 使用`fetch` HEAD请求自动检测多个站点（如百度主页、图片、新闻），根据延迟跳转到最快站点（3次重试，3秒超时）。

:heavy_check_mark: **轻量静态设计 / Lightweight Static Design**: Purely static files (`index.html`, `style.css`, `script.js`) for easy deployment on any static server, no backend required. / 纯静态文件（`index.html`、`style.css`、`script.js`），无需后端，轻松部署到任何静态服务器。

:heavy_check_mark: **简单URL混淆 / Simple URL Obfuscation**: Uses base64 encoding to hide URLs in `script.js`, preventing bot scraping while maintaining easy user configuration. / 在`script.js`中使用base64编码隐藏URL，防止机器人抓取，同时保持用户配置简单。

:heavy_check_mark: **中国大陆优化 / Optimized for China**: Leverages fast CDNs (jsDelivr, cdnjs) and robust latency testing to ensure reliable performance in China’s network environment. / 使用快速CDN（jsDelivr、cdnjs）和可靠延迟测试，确保在中国大陆网络环境下的性能。

:heavy_check_mark: **浏览器限制 / Browser Restrictions**: Blocks domestic browsers (WeChat, QQ, 360) with an animated rocket prompt, guiding users to Chrome/Edge for optimal experience. / 限制国产浏览器（微信、QQ、360），通过旋转火箭动画引导用户使用Chrome/Edge以获得最佳体验。

![Screenshot_20250914_181006.jpg](https://s2.loli.net/2025/09/15/YmaUkx3iVvApHeL.jpg)

:heavy_check_mark: **玻璃态现代化界面 / Glassmorphism Modern UI**: Features a sleek glassmorphism design with customizable themes (default: peach `#F0BE96`, black background `#000000`) and mobile-friendly layout. / 采用玻璃态现代化设计，支持自定义主题（默认：桃色`#F0BE96`，黑色背景`#000000`），适配移动端。

:heavy_check_mark: **用户友好配置 / User-Friendly Configuration**: Unified site and URL settings in `script.js` with detailed Chinese comments for easy editing. / 在`script.js`中统一站点和URL配置，附详细中文注释，方便用户编辑。

:heavy_check_mark: **快速加载 / Fast Loading**: Optimized with compressed files, deferred font loading, and efficient latency testing to minimize load times. / 通过压缩文件、延迟字体加载和高效延迟测试优化，减少加载时间。

:heavy_check_mark: **开源与可扩展 / Open Source & Extensible**: Well-documented code with detailed comments, inviting community contributions for further enhancements. / 代码注释详细，欢迎社区贡献以进一步增强功能。

⛔ **暂不支持IP地址测速 / IP address speed measurement is currently not supported**

## 📚 Project Structure / 项目结构

```
starlight-redirect/
├── index.html        # 主页面文件，包含HTML结构和基本布局 / Main page file, contains HTML structure and basic layout
├── style.css         # 样式文件，定义玻璃态界面和主题样式 / Style file, defines glassmorphism UI and theme styles
├── script.js         # 脚本文件，包含站点配置、URL混淆和延迟测试逻辑 / Script file, contains site configuration, URL obfuscation, and latency testing logic
```

## 🚀 Start / 开始

### 1.Clone the Repository / 克隆仓库:

```bash
   git clone https://github.com/ExcellentCloud/starlight-redirect.git
   cd starlight-redirect
```

### 2.Deploy / 部署:
Upload the starlight-redirect folder to a static server (e.g., Vercel, Netlify, GitHub Pages).
Ensure style.css and script.js paths are correct in index.html.
Test in modern browsers (Chrome, Firefox, Safari, Edge).

将 starlight-redirect 文件夹上传到静态服务器（如Vercel、Netlify、GitHub Pages）。确保 index.html 中 style.css 和 script.js 路径正确。在现代浏览器（Chrome、Firefox、Safari、Edge）中测试。

### 3.Configuration / 配置
Edit the `config` object in `script.js` to customize the tool

在 `script.js` 中编辑 `config` 对象以自定义工具

### 🎉 Mission accomplished! / 大功告成！
Congratulations on completing the site deployment! / 恭喜你完成了站点部署！

## 🤝 Contributing / 参与贡献
1. **Fork the Repository / 分叉仓库**:
   - Fork this repo and create a new branch for your changes.
   - 分叉本仓库并为你的更改创建新分支。
2. **Submit Pull Requests / 提交拉取请求**:
   - Add features.
   - Fix bugs.
   - 添加功能。修复错误。
3. **Issues / 问题反馈**:
   - Report bugs or suggest enhancements via GitHub Issues.
   - 通过GitHub Issues报告错误或建议改进。
4. **Code Style / 代码规范**:
   - Follow existing code structure and add detailed comments.
   - 遵循代码结构并添加详细注释。
## 🎖︎ Contributor / 贡献者

  Thanks to the selfless contributions of the following contributors, and we welcome you to join us in building the project together!/感谢以下贡献者的无私贡献，也欢迎你加入我们一起共建项目！

<a href="https://github.com/ExcellentCloud/Starlight-Redirect/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ExcellentCloud/Starlight-Redirect" />
</a>