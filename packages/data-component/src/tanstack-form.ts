import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'tanstack-form',
  description: 'Headless、类型安全的表单状态管理',
  category: 'component',
  types: ['form'],
  tags: ['headless'],

  source: {
    github: 'TanStack/form',
    npm: '@tanstack/vue-form',
  },

  links: {
    github: 'https://github.com/TanStack/form',
    npm: 'https://www.npmjs.com/package/@tanstack/vue-form',
  },
  stats: {
    stars: 6677,
    downloads: {
      monthly: 238805,
      weekly: 61880,
    },
  },
})
