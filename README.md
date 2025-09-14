# ⭐Starlight Redirect / 星光引航

![Screenshot_20250914_174254.jpg](https://s2.loli.net/2025/09/15/mCRKDc4AyJeMvL3.jpg)

A lightweight and elegant website redirection tool that intelligently detects the fastest site and redirects users seamlessly.

一个轻量而优雅的网站跳转工具，通过智能检测最快站点，为用户提供无缝导航体验。

👋 Demo / 演示站点：[Start](https://excellentcloud.github.io/Starlight-Redirect/)

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

⛔: **暂不支持IP地址测速 / IP address speed measurement is currently not supported**

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
Edit the `config` object in `script.js` to customize the tool:

在 `script.js` 中编辑 `config` 对象以自定义工具：

```bash
const config = {
    // 网站标题，显示在页面顶部和标题栏
    // Site title, displayed at the top of the page and in the title bar
    siteTitle: '网站跳转检测',

    // 站点列表，用户可添加或修改跳转的网站
    // List of sites, users can add or modify redirect URLs
    sites: [
        // 每个站点包含以下字段：
        // id: 唯一标识，用于内部引用
        // name: 显示名称，出现在按钮上
        // icon: Font Awesome图标类（参考 https://fontawesome.com/icons）
        // encodedUrl: 跳转链接，使用base64编码（在浏览器控制台运行 btoa('https://your-url') 生成）
        // Each site includes the following fields:
        // id: Unique identifier for internal reference
        // name: Display name, shown on the button
        // icon: Font Awesome icon class (see https://fontawesome.com/icons)
        // encodedUrl: Redirect URL, encoded with base64 (run btoa('https://your-url') in browser console to generate)
        { id: 'baidu-main', name: '百度主页', icon: 'fa-solid fa-rocket', encodedUrl: btoa('https://www.baidu.com') },
        { id: 'baidu-image', name: '百度图片', icon: 'fa-solid fa-rocket', encodedUrl: btoa('https://image.baidu.com') },
        { id: 'baidu-news', name: '百度新闻', icon: 'fa-solid fa-rocket', encodedUrl: btoa('https://news.baidu.com') }
        // 示例：添加新站点 / Example: Add a new site
        // { id: 'new-site', name: '新站点', icon: 'fa-solid fa-star', encodedUrl: btoa('https://example.com') }
    ],

    // 背景类型：'color'（纯色）或'image'（图片）
    // Background type: 'color' (solid color) or 'image' (image)
    backgroundType: 'color',

    // 背景颜色，当backgroundType为'color'时生效
    // Background color, used when backgroundType is 'color'
    backgroundColor: '#000000',

    // 背景图片URL，当backgroundType为'image'时生效，需确保中国大陆可访问
    // Background image URL, used when backgroundType is 'image', ensure accessible in China
    backgroundImage: 'https://t.alcy.cc/ycy',

    // 主题颜色，用于按钮、文本、进度条等
    // Theme color, used for buttons, text, progress bar, etc.
    themeColor: '#F0BE96',

    // 页脚文本，支持HTML格式（如包含链接）
    // Footer text, supports HTML format (e.g., including links)
    footerText: 'Powered by <a href="https://t.me/michaelzhu2024">Michael朱</a>',

    // 页脚链接，点击页脚文本时的跳转地址
    // Footer link, the URL to redirect when footer text is clicked
    footerLink: 'https://t.me/michaelzhu2024',

    // 延迟测试重试次数，建议3次以确保准确性
    // Number of retries for latency testing, 3 recommended for accuracy
    testRetries: 3,

    // 延迟测试超时时间（毫秒），建议3000以适应网络波动
    // Timeout for latency testing (milliseconds), 3000 recommended to handle network fluctuations
    testTimeout: 3000
};


```

### 4. Testing / 测试

- **Local Testing / 本地测试**:
  - Open `index.html` in a browser to verify functionality.
  - Check console logs (F12) for debugging.
  - 在浏览器中打开 `index.html` 验证功能。
  - 检查控制台日志（F12）进行调试。
- **Network Testing / 网络测试**:
  - Test in a China-based network to ensure CDN (cdnjs, jsDelivr) and site accessibility.
  - Use `ping` to verify site connectivity (e.g., `ping www.baidu.com`).
  - 在中国大陆网络环境中测试，确保CDN（cdnjs、jsDelivr）和站点可访问。
  - 使用 `ping` 验证站点连通性（如 `ping www.baidu.com`）。
- **Troubleshooting / 故障排查**:
  - If "All sites unreachable" appears, check browser console for errors (e.g., timeout, network issues).
  - Clear browser/DNS cache: `ipconfig /flushdns` (Windows) or `sudo dscacheutil -flushcache` (macOS).
  - Try alternative DNS (e.g., Google: `8.8.8.8`, Cloudflare: `1.1.1.1`).
  - 若显示“所有站点均不可达”，检查浏览器控制台错误（如超时、网络问题）。
  - 清除浏览器/DNS缓存：`ipconfig /flushdns`（Windows）或 `sudo dscacheutil -flushcache`（macOS）。
  - 尝试其他DNS（如Google：`8.8.8.8`，Cloudflare：`1.1.1.1`）。

### 🎉 Mission accomplished! / 大功告成！
Congratulations on completing the site deployment! / 恭喜你完成了站点部署！

## 🤝 Contributing / 参与贡献
1. **Fork the Repository / 分叉仓库**:
   - Fork this repo and create a new branch for your changes.
   - 分叉本仓库并为你的更改创建新分支。
2. **Submit Pull Requests / 提交拉取请求**:
   - Add features (e.g., advanced obfuscation, proxy support).
   - Improve latency testing or UI animations.
   - Fix bugs or optimize backend performance.
   - 添加功能（如高级混淆、代理支持）。改进延迟测试或界面动画。修复错误或优化后端性能。
3. **Issues / 问题反馈**:
   - Report bugs or suggest enhancements via GitHub Issues.
   - 通过GitHub Issues报告错误或建议改进。
4. **Code Style / 代码规范**:
   - Follow existing code structure and add detailed comments.
   - 遵循现有代码结构并添加详细注释。
## 贡献者

感谢以下贡献者的贡献。如果您想为本项目做出贡献，请参考 [如何贡献](#如何贡献)。

<a href="https://github.com/ExcellentCloud/Starlight-Redirect/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ExcellentCloud/Starlight-Redirect" />
</a>