import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@baikbingo/vite-plugin-mock-server',
  description: '基于vite&mock.js支持api截留模拟接口数据',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'baikbingo',
    'mock',
    'mock-serve',
    'vite',
    'vite-plugin',
  ],
  source: {
    npm: '@baikbingo/vite-plugin-mock-server',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@baikbingo/vite-plugin-mock-server',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 33,
      weekly: 2,
    },
  },
})
