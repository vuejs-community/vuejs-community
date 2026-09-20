import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@baicie/vite-plugin-faker',
  description: 'Vite插件，用于拦截API请求并使用faker进行模拟数据',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'faker',
    'mock',
    'api',
  ],
  links: {
    github: 'https://github.com/baicie/vite-plugin-faker',
    npm: 'https://www.npmjs.com/package/@baicie/vite-plugin-faker',
    website: 'https://github.com/baicie/vite-plugin-faker#readme',
  },
  source: {
    github: 'baicie/vite-plugin-faker',
    npm: '@baicie/vite-plugin-faker',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 232,
      weekly: 8,
    },
  },
})
