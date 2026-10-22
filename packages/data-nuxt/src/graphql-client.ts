import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'graphql-client',
  description: 'Minimal GraphQL client + code generation. Auto imports GraphQL operations for easy execution.',
  icon: 'icon:graphql-client',
  category: 'nuxt',
  types: [
    'API & Data Fetching',
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
})
