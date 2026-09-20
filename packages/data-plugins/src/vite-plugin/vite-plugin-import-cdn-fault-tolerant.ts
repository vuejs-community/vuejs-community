import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-import-cdn-fault-tolerant',
  description: 'vite插件 引入cdn的包时，可配置容错路径/、本地路径',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'cdn',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-import-cdn-fault-tolerant',
  },
  source: {
    npm: 'vite-plugin-import-cdn-fault-tolerant',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 1,
    },
  },
})
