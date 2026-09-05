import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'twa',
  description: 'Nuxt module for generating Trusted Web App from Nuxt app',
  category: 'nuxt',
  types: [
    'Performance',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/tuarrep/nuxt-twa',
    npm: 'https://npmjs.com/package/nuxt-twa',
    website: 'https://nuxt-twa.tuarrep.dev',
  },
  source: {
    github: 'tuarrep/nuxt-twa',
    npm: 'nuxt-twa',
  },
  stats: {
    stars: 35,
    downloads: {
      monthly: 205,
      weekly: 37,
    },
  },
})
