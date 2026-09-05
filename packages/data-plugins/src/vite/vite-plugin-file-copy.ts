import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-file-copy',
  description: '一个vite插件，复制静态资源',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'vite静态资源复制',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/crx-96/vite-plugin-file-copy',
    npm: 'https://www.npmjs.com/package/vite-plugin-file-copy',
  },
  stats: {
    downloads: {
      monthly: 99,
      weekly: 23,
    },
  },
})
