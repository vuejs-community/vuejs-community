import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-import-cdn-fault-tolerant',
  description: 'vite插件 引入cdn的包时，可配置容错路径/、本地路径',
  version: '0.1.2',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'cdn',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-import-cdn-fault-tolerant',
  },
  stats: {
    downloads: {
      monthly: 34,
      weekly: 0,
    },
  },
})
