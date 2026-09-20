import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@cmfx/vite-plugin-about',
  description: '为 cmfx 生成 about 页面的数据',
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
  ],
  links: {
    github: 'https://github.com/issue9/cmfx',
    npm: 'https://www.npmjs.com/package/@cmfx/vite-plugin-about',
    website: 'https://github.com/issue9/cmfx',
  },
  source: {
    github: 'issue9/cmfx',
    npm: '@cmfx/vite-plugin-about',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 26,
      weekly: 1,
    },
  },
})
