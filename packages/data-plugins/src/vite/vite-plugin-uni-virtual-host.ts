import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-uni-virtual-host',
  description: '自动为 uni-app 组件注入 `virtualHost: true` 配置，让微信小程序的组件行为与 App/H5 端保持一致',
  version: '0.0.2',
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
    github: 'https://github.com/gd4Ark/vite-plugin-uni-virtual-host',
    npm: 'https://www.npmjs.com/package/vite-plugin-uni-virtual-host',
  },
  stats: {
    downloads: {
      monthly: 18,
      weekly: 4,
    },
  },
})
