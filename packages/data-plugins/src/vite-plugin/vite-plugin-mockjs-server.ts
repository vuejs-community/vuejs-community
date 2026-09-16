import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-mockjs-server',
  description: '用于vite dev时，进行模拟 api',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'mockjs',
    'vite-plugin',
    'mock-api',
    'api',
    'vite',
  ],
  source: {
    github: 'pangyunchuan/vite-plugin-mockjs-server',
    npm: 'vite-plugin-mockjs-server',
  },
  links: {
    github: 'https://github.com/pangyunchuan/vite-plugin-mockjs-server',
    npm: 'https://www.npmjs.com/package/vite-plugin-mockjs-server',
    website: 'https://github.com/pangyunchuan/vite-plugin-mockjs-server#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 16,
      weekly: 3,
    },
  },
})
