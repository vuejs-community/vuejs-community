import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'neo4j',
  description: 'Effortlessly integrate Neo4j\'s powerful graph database into your Nuxt applications!',
  category: 'nuxt',
  types: [
    'Database',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/nuxtaid/nuxt-neo4j',
    npm: 'https://npmjs.com/package/nuxt-neo4j',
    website: 'https://github.com/nuxtaid/nuxt-neo4j',
  },
  source: {
    github: 'nuxtaid/nuxt-neo4j',
    npm: 'nuxt-neo4j',
  },
  stats: {
    stars: 17,
    downloads: {
      monthly: 299,
      weekly: 105,
    },
  },
})
