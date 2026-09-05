import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'nuxt-graphql-middleware',
  description: 'Expose GraphQL queries and mutations as server API routes.',
  category: 'nuxt',
  types: [
    'Request',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/dulnan/nuxt-graphql-middleware',
    npm: 'https://npmjs.com/package/nuxt-graphql-middleware',
    website: 'https://github.com/dulnan/nuxt-graphql-middleware',
  },
  source: {
    github: 'dulnan/nuxt-graphql-middleware',
    npm: 'nuxt-graphql-middleware',
  },
  stats: {
    stars: 70,
    downloads: {
      monthly: 6825,
      weekly: 2152,
    },
  },
})
