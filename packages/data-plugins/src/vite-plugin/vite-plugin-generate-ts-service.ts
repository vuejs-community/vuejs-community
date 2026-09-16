import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-generate-ts-service',
  description: '根据api文件夹自动生成api的ts类型',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'plugin',
  ],
  source: {
    npm: 'vite-plugin-generate-ts-service',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-generate-ts-service',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
