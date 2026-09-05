import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'graphql-server',
  description: 'Easy GraphQL server implementation with Nuxt',
  category: 'nuxt',
  types: [
    'Request',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/tobiasdiez/nuxt-graphql-server',
    npm: 'https://npmjs.com/package/nuxt-graphql-server',
    website: 'https://github.com/tobiasdiez/nuxt-graphql-server',
  },
  source: {
    github: 'tobiasdiez/nuxt-graphql-server',
    npm: 'nuxt-graphql-server',
  },
  stats: {
    stars: 41,
    downloads: {
      monthly: 1579,
      weekly: 326,
    },
  },
})
