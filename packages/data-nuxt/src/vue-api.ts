import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vue-api',
  description: 'A flexible and provider-agnostic API handling library for Vue 3 and Nuxt 3. Supports multiple data providers like axios, ofetch and more. It includes a robust model mapping feature.',
  category: 'nuxt',
  types: [
    'Request',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/gaetansenn/vue-api',
    npm: 'https://npmjs.com/package/@vue-api/nuxt',
    website: 'https://vue-api.dewib.com/',
  },
  source: {
    github: 'gaetansenn/vue-api#main/packages/nuxt',
    npm: '@vue-api/nuxt',
  },
  stats: {
    stars: 19,
    downloads: {
      monthly: 564,
      weekly: 137,
    },
  },
})
