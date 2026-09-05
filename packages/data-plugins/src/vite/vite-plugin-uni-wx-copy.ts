import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-uni-wx-copy',
  description: '一个帮助你在 uni-app 项目中复用原生微信小程序页面的插件',
  version: '0.0.5',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'uni-app',
    'miniprogram',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/gd4Ark/vite-plugin-uni-wx-copy',
    npm: 'https://www.npmjs.com/package/vite-plugin-uni-wx-copy',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 5,
    },
  },
})
