import { defineConfig } from 'vitepress'
import { nav } from './relaConf';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "前端小菜鸟的博客网站",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav:nav,

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
})
