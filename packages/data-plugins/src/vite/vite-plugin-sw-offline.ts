import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-sw-offline',
  description: 'Vite 插件：Service Worker、离线页模板与构建注入（适用于 Vite H5 / uni-app H5 等）',
  version: '1.0.7',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'service-worker',
    'offline',
    'h5',
    'uni-app',
    'pwa',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-sw-offline',
  },
  stats: {
    downloads: {
      monthly: 44,
      weekly: 8,
    },
  },
})
