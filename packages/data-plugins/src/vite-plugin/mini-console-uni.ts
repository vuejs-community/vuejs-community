import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'mini-console-uni',
  description: '面向 uni-app Vue3 + Vite + 微信小程序的轻量真机调试面板，基于 SFC/Template AST 在编译期注入 DebugRoot',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'uni-app',
    'weixin',
    'miniprogram',
    'debug',
    'mini-console',
    'vite-plugin',
  ],
  source: {
    github: 'Surtr-a/mini-console-uni',
    npm: 'mini-console-uni',
  },
  links: {
    github: 'https://github.com/Surtr-a/mini-console-uni',
    npm: 'https://www.npmjs.com/package/mini-console-uni',
    website: 'https://github.com/Surtr-a/mini-console-uni#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 482,
      weekly: 11,
    },
  },
})
