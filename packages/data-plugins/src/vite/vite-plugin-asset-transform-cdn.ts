import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-asset-transform-cdn',
  description: '> vite 插件，支持构建时将资源替换成 cdn 地址',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'asset',
    'cdn',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Abunuo/vite-plugin-asset-transform-CDN',
    npm: 'https://www.npmjs.com/package/vite-plugin-asset-transform-cdn',
  },
  stats: {
    downloads: {
      monthly: 4,
      weekly: 0,
    },
  },
})
