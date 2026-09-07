import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'inkline',
  description: '面向设计系统的可访问 Vue 3 组件库',
  icon: 'icon:inkline',
  category: 'ui',
  types: ['ui-library'],
  tags: ['ui', 'accessibility'],

  source: {
    github: 'inkline/inkline',
    npm: '@inkline/inkline',
  },

  links: {
    github: 'https://github.com/inkline/inkline',
    npm: 'https://www.npmjs.com/package/@inkline/inkline',
  },
  stats: {
    stars: 1462,
    downloads: {
      monthly: 17466,
      weekly: 2047,
    },
  },
})
