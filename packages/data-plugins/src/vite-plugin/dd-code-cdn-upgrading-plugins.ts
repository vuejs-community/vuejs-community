import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@dd-code/cdn-upgrading-plugins',
  description: 'Vite 插件：构建完成后将静态资源上传 CDN，并仅保留 index.html',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'cdn',
    'upload',
  ],
  source: {
    npm: '@dd-code/cdn-upgrading-plugins',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@dd-code/cdn-upgrading-plugins',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 3,
    },
  },
})
