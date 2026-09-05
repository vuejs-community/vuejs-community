import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'graphql-client',
  description: 'Minimal GraphQL Client + Code Generation for Nuxt. Auto imports GraphQL Operations for easy execution.',
  category: 'nuxt',
  types: [
    'Request',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/diizzayy/nuxt-graphql-client',
    npm: 'https://npmjs.com/package/nuxt-graphql-client',
    website: 'https://github.com/diizzayy/nuxt-graphql-client',
  },
  source: {
    github: 'diizzayy/nuxt-graphql-client',
    npm: 'nuxt-graphql-client',
  },
  stats: {
    stars: 401,
    downloads: {
      monthly: 26949,
      weekly: 6655,
    },
  },
})
