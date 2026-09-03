import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'mini-console-uni',
  description: '面向 uni-app Vue3 + Vite + 微信小程序的轻量真机调试面板，基于 SFC/Template AST 在编译期注入 DebugRoot',
  version: '0.3.2',
  category: 'plugin',
  tags: [
    'uni-app',
    'weixin',
    'miniprogram',
    'debug',
    'mini-console',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Surtr-a/mini-console-uni',
    npm: 'https://www.npmjs.com/package/mini-console-uni',
  },
  stats: {
    downloads: {
      monthly: 457,
      weekly: 37,
    },
  },
})
