import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'pinia-colada',
  description: '🍹 The smart data fetching layer for Vue',
  icon: 'logos:pinia',
  category: 'hooks',
  types: ['data-fetching', 'composable-library'],
  tags: ['hooks', 'composables', 'data-fetching', 'query', 'pinia', 'vue3'],

  source: {
    github: 'posva/pinia-colada',
    npm: '@pinia/colada',
  },

  links: {
    github: 'https://github.com/posva/pinia-colada',
    npm: 'https://www.npmjs.com/package/@pinia/colada',
    website: 'https://pinia-colada.esm.dev',
  },

  stats: {
    stars: 2230,
    downloads: {
      monthly: 356895,
      weekly: 90401,
    },
  },
})
