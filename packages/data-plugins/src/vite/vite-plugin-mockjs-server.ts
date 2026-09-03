import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-mockjs-server',
  description: '用于vite dev时，进行模拟 api',
  version: '0.0.3',
  category: 'plugin',
  tags: [
    'mockjs',
    'vite-plugin',
    'mock-api',
    'api',
    'vite',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/pangyunchuan/vite-plugin-mockjs-server',
    npm: 'https://www.npmjs.com/package/vite-plugin-mockjs-server',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 2,
    },
  },
})
