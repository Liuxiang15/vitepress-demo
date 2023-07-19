import { DefaultTheme } from 'vitepress';
export const nav: DefaultTheme.NavItem[] = [
  {
    text: '首页',
    link: '/' // 表示docs/index.md
  },
  {
    text: '关于我',
    items: [
      { text: 'Github', link: 'https://github.com/Liuxiang15' },
      {
        text: '掘金',
        link: 'https://juejin.cn/user/1099167360878535/posts'
      },
     
    ]
  }
];