import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'oku-ui',
  description: 'Radix UI Primitives 的 Vue 1:1 移植',
  category: 'ui',
  types: ['headless-ui'],
  tags: ['ui', 'headless-ui', 'radix'],

  source: {
    github: 'oku-ui/primitives',
    npm: '@oku-ui/primitives',
  },

  links: {
    github: 'https://github.com/oku-ui/primitives',
    npm: 'https://www.npmjs.com/package/@oku-ui/primitives',
  },
  stats: {
    stars: 891,
    downloads: {
      monthly: 3300,
      weekly: 576,
    },
  },
})
