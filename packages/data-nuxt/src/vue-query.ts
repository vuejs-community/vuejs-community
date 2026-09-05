import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vue-query',
  description: '0 config lightweight Nuxt module for @tanstack/vue-query.',
  category: 'nuxt',
  types: [
    'Request',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/Hebilicious/vue-query-nuxt',
    npm: 'https://npmjs.com/package/@hebilicious/vue-query-nuxt',
    website: 'https://github.com/Hebilicious/vue-query-nuxt#readme',
  },
  source: {
    github: 'Hebilicious/vue-query-nuxt#main/packages/vue-query-nuxt',
    npm: '@hebilicious/vue-query-nuxt',
  },
  stats: {
    stars: 110,
    downloads: {
      monthly: 7113,
      weekly: 2111,
    },
  },
})
