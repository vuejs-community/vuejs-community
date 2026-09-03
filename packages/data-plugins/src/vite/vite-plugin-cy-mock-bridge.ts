import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-cy-mock-bridge',
  description: 'vite 自动引入 测试数据',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'mock',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-cy-mock-bridge',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 5,
    },
  },
})
