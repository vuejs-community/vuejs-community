import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-uni-subpackage-sync',
  description: 'uni-app 混合开发分包同步插件，自动同步 uni-app 分包内容至原生微信小程序项目',
  version: '0.0.3',
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
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-uni-subpackage-sync',
  },
  stats: {
    downloads: {
      monthly: 4,
      weekly: 1,
    },
  },
})
