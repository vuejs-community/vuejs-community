import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@m-f2e/vite-plugin-dev-mock',
  description: '为开发环境提供 mock 接口服务插件',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@m-f2e/vite-plugin-dev-mock',
  },
  source: {
    npm: '@m-f2e/vite-plugin-dev-mock',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 2,
    },
  },
})
