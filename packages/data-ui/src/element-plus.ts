import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'element-plus',
  description: 'Element 团队出品的 Vue 3 UI 库',
  category: 'ui',
  types: ['ui-library'],
  tags: ['ui', 'element'],

  source: {
    github: 'element-plus/element-plus',
    npm: 'element-plus',
  },

  links: {
    github: 'https://github.com/element-plus/element-plus',
    npm: 'https://www.npmjs.com/package/element-plus',
    website: 'https://element-plus.org',
  },
  stats: {
    stars: 27732,
    downloads: {
      monthly: 2798164,
      weekly: 688796,
    },
  },
})
