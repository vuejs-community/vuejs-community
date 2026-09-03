import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@dd-code/cdn-upgrading-plugins',
  description: 'Vite 插件：构建完成后将静态资源上传 CDN，并仅保留 index.html',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'cdn',
    'upload',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@dd-code/cdn-upgrading-plugins',
  },
  stats: {
    downloads: {
      monthly: 19,
      weekly: 6,
    },
  },
})
