import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-asset-transform-cdn',
  description: '> vite 插件，支持构建时将资源替换成 cdn 地址',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'asset',
    'cdn',
  ],
  source: {
    github: 'Abunuo/vite-plugin-asset-transform-CDN',
    npm: 'vite-plugin-asset-transform-cdn',
  },
  links: {
    github: 'https://github.com/Abunuo/vite-plugin-asset-transform-CDN',
    npm: 'https://www.npmjs.com/package/vite-plugin-asset-transform-cdn',
    website: 'https://github.com/Abunuo/vite-plugin-asset-transform-CDN#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 4,
    },
  },
})
