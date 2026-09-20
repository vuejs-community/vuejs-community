import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@cmfx/vite-plugin-api',
  description: '为 cmfx 组件库提取 API 文档',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'cmfx',
    'vite',
    'plugin',
    'vite-plugin',
    'api',
    'doc',
  ],
  links: {
    github: 'https://github.com/issue9/cmfx',
    npm: 'https://www.npmjs.com/package/@cmfx/vite-plugin-api',
    website: 'https://github.com/issue9/cmfx',
  },
  source: {
    github: 'issue9/cmfx',
    npm: '@cmfx/vite-plugin-api',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 42,
      weekly: 15,
    },
  },
})
