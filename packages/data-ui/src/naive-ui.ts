import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'naive-ui',
  description: '全 TypeScript、主题可定制的 Vue 3 组件库',
  icon: 'logos:naiveui',
  category: 'ui',
  types: ['ui-library'],
  tags: ['ui', 'typescript'],

  source: {
    github: 'tusen-ai/naive-ui',
    npm: 'naive-ui',
  },

  links: {
    github: 'https://github.com/tusen-ai/naive-ui',
    npm: 'https://www.npmjs.com/package/naive-ui',
    website: 'https://www.naiveui.com',
  },
  stats: {
    stars: 18536,
    downloads: {
      monthly: 666269,
      weekly: 107422,
    },
  },
})
