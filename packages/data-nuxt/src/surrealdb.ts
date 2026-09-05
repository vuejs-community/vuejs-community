import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'surrealdb',
  description: 'A Nuxt module aimed to simplify the use of SurrealDB',
  category: 'nuxt',
  types: [
    'Database',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/sandros94/nuxt-surrealdb',
    npm: 'https://npmjs.com/package/nuxt-surrealdb',
    website: 'https://github.com/sandros94/nuxt-surrealdb',
  },
  source: {
    github: 'sandros94/nuxt-surrealdb',
    npm: 'nuxt-surrealdb',
  },
  stats: {
    stars: 48,
    downloads: {
      monthly: 345,
      weekly: 110,
    },
  },
})
