import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'jsonapi',
  description: 'Easy JSON:API client integration for Nuxt',
  category: 'nuxt',
  types: [
    'Request',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/patrickcate/nuxt-jsonapi',
    npm: 'https://npmjs.com/package/nuxt-jsonapi',
    website: 'https://github.com/patrickcate/nuxt-jsonapi',
  },
  source: {
    github: 'patrickcate/nuxt-jsonapi',
    npm: 'nuxt-jsonapi',
  },
  stats: {
    stars: 44,
    downloads: {
      monthly: 291,
      weekly: 52,
    },
  },
})
