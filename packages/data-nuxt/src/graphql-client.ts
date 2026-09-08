import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'graphql-client',
  description: 'Minimal GraphQL Client + Code Generation for Nuxt. Auto imports GraphQL Operations for easy execution.',
  icon: 'icon:graphql-client',
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
    stars: 400,
    downloads: {
      monthly: 24643,
      weekly: 5467,
    },
  },
})
