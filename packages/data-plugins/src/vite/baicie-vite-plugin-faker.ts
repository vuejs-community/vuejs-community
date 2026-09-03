import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@baicie/vite-plugin-faker',
  description: 'Vite插件，用于拦截API请求并使用faker进行模拟数据',
  version: '0.1.1-beta.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'faker',
    'mock',
    'api',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/baicie/vite-plugin-faker',
    npm: 'https://www.npmjs.com/package/@baicie/vite-plugin-faker',
  },
  stats: {
    downloads: {
      monthly: 220,
      weekly: 20,
    },
  },
})
