import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-uni-subpackage-copy',
  description: '一个帮助你将 uni-app 项目的分包内容自动同步到原生微信小程序项目中的混合开发插件',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'gd4Ark/vite-plugin-uni-subpackage-copy',
    npm: 'vite-plugin-uni-subpackage-copy',
  },
  links: {
    github: 'https://github.com/gd4Ark/vite-plugin-uni-subpackage-copy',
    npm: 'https://www.npmjs.com/package/vite-plugin-uni-subpackage-copy',
  },
  stats: {
    downloads: {
      monthly: 23,
      weekly: 7,
    },
  },
})
