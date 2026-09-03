import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-static-cdn',
  description: '自动上传静态资源到cdn服务器',
  version: '0.0.4',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'rollup',
    'transform',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/Alex-Programer/vite-static-cdn',
    npm: 'https://www.npmjs.com/package/vite-static-cdn',
  },
  stats: {
    downloads: {
      monthly: 19,
      weekly: 1,
    },
  },
})
