import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'nuxt-open-fetch',
  description: 'Generate zero-overhead, 100% typed OpenAPI clients for Nuxt.',
  category: 'nuxt',
  types: [
    'Request',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/Norbiros/nuxt-open-fetch',
    npm: 'https://npmjs.com/package/nuxt-open-fetch',
    website: 'https://nuxt-open-fetch.norbiros.dev',
  },
  source: {
    github: 'Norbiros/nuxt-open-fetch',
    npm: 'nuxt-open-fetch',
  },
  stats: {
    stars: 254,
    downloads: {
      monthly: 43143,
      weekly: 12403,
    },
  },
})
