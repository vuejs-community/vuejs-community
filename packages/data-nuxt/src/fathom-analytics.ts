import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'fathom-analytics',
  description: 'Fathom analytics integration for Nuxt',
  category: 'nuxt',
  types: [
    'Analytics',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/valgeirb/nuxt-fathom',
    npm: 'https://npmjs.com/package/nuxt-fathom',
    website: 'https://github.com/valgeirb/nuxt-fathom#readme',
  },
  source: {
    github: 'valgeirb/nuxt-fathom',
    npm: 'nuxt-fathom',
  },
  stats: {
    stars: 8,
    downloads: {
      monthly: 9751,
      weekly: 3007,
    },
  },
})
