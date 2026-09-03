import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@m-f2e/vite-plugin-dev-mock',
  description: '为开发环境提供 mock 接口服务插件',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@m-f2e/vite-plugin-dev-mock',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 7,
    },
  },
})
