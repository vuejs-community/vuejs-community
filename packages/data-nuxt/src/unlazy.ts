import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unlazy',
  description: 'Lazy loading library for placeholder images',
  category: 'nuxt',
  types: [
    'Images',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/johannschopplich/unlazy',
    npm: 'https://npmjs.com/package/@unlazy/nuxt',
    website: 'https://unlazy.byjohann.dev/',
  },
  source: {
    github: 'johannschopplich/unlazy#main/packages/nuxt',
    npm: '@unlazy/nuxt',
  },
  stats: {
    stars: 888,
    downloads: {
      monthly: 5887,
      weekly: 1179,
    },
  },
})
