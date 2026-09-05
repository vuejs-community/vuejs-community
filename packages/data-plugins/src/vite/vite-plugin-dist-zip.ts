import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-dist-zip',
  description: '用于在构建后将文件打入压缩包',
  version: '1.0.5',
  category: 'plugin',
  tags: [
    'zip',
    'vite-plugin',
    'vite',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-dist-zip',
  },
  stats: {
    downloads: {
      monthly: 103,
      weekly: 8,
    },
  },
})
