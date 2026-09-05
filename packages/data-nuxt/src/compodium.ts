import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'compodium',
  description: 'A plug an play component playground for Nuxt.',
  category: 'nuxt',
  types: [
    'Devtools',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/romhml/compodium',
    npm: 'https://npmjs.com/package/@compodium/nuxt',
    website: 'https://github.com/romhml/compodium',
  },
  source: {
    github: 'romhml/compodium#main/packages/nuxt',
    npm: '@compodium/nuxt',
  },
  stats: {
    stars: 259,
    downloads: {
      monthly: 10118,
      weekly: 2674,
    },
  },
})
