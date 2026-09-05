import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'varlet',
  description: '基于 Material Design 2/3 的移动端组件库，同时支持桌面端',
  category: 'ui',
  types: ['mobile-ui', 'ui-library'],
  tags: ['ui', 'mobile', 'material-design'],

  source: {
    github: 'varletjs/varlet',
    npm: '@varlet/ui',
  },

  links: {
    github: 'https://github.com/varletjs/varlet',
    npm: 'https://www.npmjs.com/package/@varlet/ui',
    website: 'https://varletjs.org',
  },
  stats: {
    stars: 5334,
    downloads: {
      monthly: 16424,
      weekly: 3200,
    },
  },
})
