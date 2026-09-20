import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-cy-mock-bridge',
  description: 'vite 自动引入 测试数据',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'mock',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-cy-mock-bridge',
  },
  source: {
    npm: 'vite-plugin-cy-mock-bridge',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 3,
    },
  },
})
