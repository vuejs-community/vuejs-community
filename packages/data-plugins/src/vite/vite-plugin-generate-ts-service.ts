import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-generate-ts-service',
  description: '根据api文件夹自动生成api的ts类型',
  version: '1.0.6',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-generate-ts-service',
  },
  stats: {
    downloads: {
      monthly: 17,
      weekly: 5,
    },
  },
})
