import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-sw-offline',
  description: 'Vite 插件：Service Worker、离线页模板与构建注入（适用于 Vite H5 / uni-app H5 等）',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'service-worker',
    'offline',
    'h5',
    'uni-app',
    'pwa',
  ],
  source: {
    npm: 'vite-plugin-sw-offline',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-sw-offline',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 69,
      weekly: 15,
    },
  },
})
