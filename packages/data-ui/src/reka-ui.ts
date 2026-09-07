import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'reka-ui',
  description: '原 radix-vue，构建可访问设计系统的 Vue 无头组件库',
  icon: 'icon:reka-ui',
  category: 'ui',
  types: ['headless-ui'],
  tags: ['ui', 'headless-ui', 'radix'],

  source: {
    github: 'unovue/reka-ui',
    npm: 'reka-ui',
  },

  links: {
    github: 'https://github.com/unovue/reka-ui',
    npm: 'https://www.npmjs.com/package/reka-ui',
    website: 'https://reka-ui.com',
  },
  stats: {
    stars: 6769,
    downloads: {
      monthly: 6799498,
      weekly: 1642696,
    },
  },
})
