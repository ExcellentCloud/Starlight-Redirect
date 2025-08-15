// 配置对象：用户可在此修改网站标题、站点列表、主题等
const config = {
    siteTitle: '网站跳转检测', // 网站标题，显示在页面顶部和标题栏
    sites: [ // 站点列表，用户可添加或修改跳转的网站
        // 每个站点包含：id（唯一标识）、name（显示名称）、icon（Font Awesome图标）、encodedUrl（跳转链接，使用base64编码）
        { id: 'baidu-main', name: '百度主页', icon: 'fa-solid fa-rocket', encodedUrl: btoa('https://www.baidu.com') },
        { id: 'baidu-image', name: '百度图片', icon: 'fa-solid fa-rocket', encodedUrl: btoa('https://image.baidu.com') },
        { id: 'baidu-news', name: '百度新闻', icon: 'fa-solid fa-rocket', encodedUrl: btoa('https://news.baidu.com') }
        // 示例：添加新站点
        // { id: 'new-site', name: '新站点', icon: 'fa-solid fa-star', encodedUrl: btoa('https://example.com') }
    ],
    backgroundType: 'color', // 背景类型：'color'（纯色）或'image'（图片）
    backgroundColor: '#000000', // 背景颜色（当backgroundType为'color'时生效）
    backgroundImage: 'https://t.alcy.cc/ycy', // 背景图片URL（当backgroundType为'image'时生效，需中国大陆可访问）
    themeColor: '#F0BE96', // 主题颜色，用于按钮、文本、进度条等
    footerText: 'Powered by <a href="https://t.me/michaelzhu2024">Michael朱</a>', // 页脚文本，支持HTML
    footerLink: 'https://t.me/michaelzhu2024', // 页脚链接
    testRetries: 3, // 延迟测试重试次数（建议3次）
    testTimeout: 3000 // 延迟测试超时时间（毫秒，建议3000）
};

// 初始化页面配置
// 设置标题、页脚、背景和主题颜色
document.getElementById('site-title').textContent = config.siteTitle;
document.getElementById('site-header').textContent = config.siteTitle;
document.getElementById('footer').innerHTML = config.footerText;
document.body.style.background = config.backgroundType === 'color'
    ? config.backgroundColor
    : `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${config.backgroundImage}') no-repeat center center fixed`;
document.body.style.backgroundSize = config.backgroundType === 'image' ? 'cover' : 'auto';
document.documentElement.style.setProperty('--theme-color', config.themeColor);
document.documentElement.style.setProperty('--theme-gradient', `linear-gradient(90deg, ${config.themeColor}, #F7D4B6)`);

// 获取DOM元素
const status = document.querySelector('.status'); // 状态文本
const progressFill = document.getElementById('progress-fill'); // 进度条填充
const progressText = document.getElementById('progress-text'); // 进度条文本
const siteList = document.getElementById('site-list'); // 站点按钮容器
const browserWarning = document.getElementById('browser-warning'); // 浏览器警告容器
const mainContainer = document.getElementById('main-container'); // 主容器
let isRedirecting = false; // 防止重复跳转

// 检测国产浏览器（微信、QQ、360）
function isRestrictedBrowser() {
    const ua = navigator.userAgent.toLowerCase();
    return /micromessenger|qq\/|360se|qhbrowser/i.test(ua);
}

// 显示或隐藏浏览器警告
// 如果是国产浏览器，显示警告并隐藏主界面；否则显示主界面
if (isRestrictedBrowser()) {
    browserWarning.style.display = 'flex';
    mainContainer.style.display = 'none';
} else {
    browserWarning.style.display = 'none';
    mainContainer.style.display = 'block';
}

// 防抖函数：防止按钮快速重复点击
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// 解码URL：将base64编码的URL解码为真实URL
function decodeUrl(encoded) {
    try {
        const url = atob(encoded);
        // 验证URL格式
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            throw new Error('无效的URL格式');
        }
        return url;
    } catch (error) {
        console.warn(`解码URL失败: ${error.message}`);
        return null;
    }
}

// 渲染站点按钮
// 为每个站点生成按钮，支持点击跳转
function renderSiteButtons() {
    siteList.innerHTML = '';
    config.sites.forEach(site => {
        const button = document.createElement('button');
        button.className = 'site-button';
        button.dataset.siteId = site.id;
        button.innerHTML = `<i class="${site.icon}" style="display: ${site.icon ? 'inline-block' : 'none'}"></i> ${site.name}`;
        button.title = site.name;
        siteList.appendChild(button);
        button.addEventListener('click', debounce(() => {
            if (!isRedirecting) {
                isRedirecting = true;
                button.disabled = true;
                const url = decodeUrl(site.encodedUrl);
                if (url) {
                    window.location.href = url;
                } else {
                    status.textContent = '无法跳转，请稍后重试！';
                    isRedirecting = false;
                    button.disabled = false;
                }
            }
        }, 300));
    });
}

// 测试站点延迟
// 使用fetch HEAD请求测试站点响应时间，重试指定次数，超时后标记失败
async function testSiteLatency(site, retries = config.testRetries, timeout = config.testTimeout) {
    let latencies = [];
    const url = decodeUrl(site.encodedUrl);
    if (!url) {
        console.warn(`站点 ${site.name} 的URL解码失败`);
        return { latency: Infinity, error: '无法解码URL' };
    }

    for (let i = 0; i < retries; i++) {
        try {
            const controller = new AbortController();
            const signal = controller.signal;
            const start = performance.now();
            const promise = fetch(url, { method: 'HEAD', signal, mode: 'no-cors' });
            const timeoutPromise = new Promise((_, reject) => {
                setTimeout(() => {
                    controller.abort();
                    reject(new Error('请求超时'));
                }, timeout);
            });
            await Promise.race([promise, timeoutPromise]);
            const latency = performance.now() - start;
            latencies.push(latency);
            console.log(`站点 ${site.name} 测试 ${i + 1}/${retries} 成功，延迟: ${latency.toFixed(2)}ms`);
        } catch (error) {
            console.warn(`站点 ${site.name} 测试 ${i + 1}/${retries} 失败: ${error.message}`);
        }
    }

    if (latencies.length > 0) {
        const avgLatency = latencies.reduce((sum, val) => sum + val, 0) / latencies.length;
        return { latency: avgLatency, error: null };
    }
    return { latency: Infinity, error: '所有尝试均失败' };
}

// 检测最快站点
// 遍历所有站点，测试延迟并自动跳转到最快站点
async function findFastestSite() {
    status.textContent = '正在检测最优站点...';
    progressFill.style.width = '0%';
    progressText.textContent = '检测中: 0%';

    const totalSites = config.sites.length;
    let completedSites = 0;

    const results = await Promise.all(config.sites.map(async (site) => {
        const result = await testSiteLatency(site);
        completedSites++;
        const progress = Math.round((completedSites / totalSites) * 100);
        progressFill.style.transition = 'width 0.5s ease-out';
        progressFill.style.width = `${progress}%`;
        progressText.textContent = `检测中: ${progress}%`;
        return { ...site, ...result };
    }));

    const validSites = results.filter(site => site.latency !== Infinity);
    if (validSites.length > 0) {
        const fastestSite = validSites.reduce((prev, curr) =>
            prev.latency < curr.latency ? prev : curr
        );
        status.textContent = `最优站点: ${fastestSite.name} (延迟: ${fastestSite.latency.toFixed(2)}ms)`;
        if (!isRedirecting) {
            isRedirecting = true;
            const url = decodeUrl(fastestSite.encodedUrl);
            if (url) {
                setTimeout(() => {
                    window.location.href = url;
                }, 1000);
            } else {
                status.textContent = '无法跳转，请手动选择！';
                isRedirecting = false;
            }
        }
    } else {
        status.textContent = '所有站点均不可达，请手动选择！';
        console.warn('所有站点测试失败，请检查网络或站点URL配置');
        progressFill.style.width = '0%';
        progressText.textContent = '检测中: 0%';
    }
}

// 初始化
// 如果不是国产浏览器，渲染按钮并开始检测
if (!isRestrictedBrowser()) {
    renderSiteButtons();
    setTimeout(findFastestSite, 3000);
}

// 页面卸载时重置跳转状态
window.addEventListener('beforeunload', () => {
    isRedirecting = false;
});