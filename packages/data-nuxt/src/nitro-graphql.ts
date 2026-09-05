import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'nitro-graphql',
  description: 'A standalone Nitro module that integrates GraphQL servers into any Nitro application with automatic type generation, file watching, and seamless framework integration.',
  category: 'nuxt',
  types: [
    'Request',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/productdevbook/nitro-graphql',
    npm: 'https://npmjs.com/package/nitro-graphql',
    website: 'https://github.com/productdevbook/nitro-graphql',
  },
  source: {
    github: 'productdevbook/nitro-graphql',
    npm: 'nitro-graphql',
  },
  stats: {
    stars: 126,
    downloads: {
      monthly: 1097,
      weekly: 409,
    },
  },
})
