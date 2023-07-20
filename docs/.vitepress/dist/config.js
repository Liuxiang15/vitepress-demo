"use strict";
exports.__esModule = true;
var vitepress_1 = require("vitepress");
// https://vitepress.dev/reference/site-config
exports["default"] = vitepress_1.defineConfig({
    title: "前端小菜鸟的博客网站",
    description: "A VitePress Site",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Examples', link: '/markdown-examples' }
        ],
        sidebar: [
            {
                text: 'Examples',
                items: [
                    { text: 'Markdown Examples', link: '/markdown-examples' },
                    { text: 'Runtime API Examples', link: '/api-examples' }
                ]
            }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ],
        logo: '/avatar.jpeg' // 表示docs/public/avartar.png
    }
});