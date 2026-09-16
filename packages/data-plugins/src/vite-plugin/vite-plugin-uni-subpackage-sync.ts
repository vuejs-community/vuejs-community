import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-uni-subpackage-sync',
  description: 'uni-app 混合开发分包同步插件，自动同步 uni-app 分包内容至原生微信小程序项目',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'uni-app',
    'miniprogram',
  ],
  source: {
    npm: 'vite-plugin-uni-subpackage-sync',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-uni-subpackage-sync',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 9,
      weekly: 1,
    },
  },
})
