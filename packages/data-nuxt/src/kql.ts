import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'kql',
  description: 'Nuxt module for Kirby\'s Query Language API',
  category: 'nuxt',
  types: [
    'CMS',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/johannschopplich/nuxt-kirby',
    npm: 'https://npmjs.com/package/nuxt-kirby',
    website: 'https://nuxt-kirby.byjohann.dev/',
  },
  source: {
    github: 'johannschopplich/nuxt-kirby',
    npm: 'nuxt-kirby',
  },
  stats: {
    stars: 50,
    downloads: {
      monthly: 2889,
      weekly: 479,
    },
  },
})
