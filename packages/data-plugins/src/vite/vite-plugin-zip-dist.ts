import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-zip-dist',
  description: '用于在打包后将打包文件压缩为zip文件',
  version: '1.0.4',
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
    npm: 'https://www.npmjs.com/package/vite-plugin-zip-dist',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 1,
    },
  },
})
