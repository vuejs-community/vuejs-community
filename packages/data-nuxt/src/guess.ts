import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'guess',
  description: 'Guess.js module for Nuxt',
  category: 'nuxt',
  types: [
    'Performance',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-community/guess-module',
    npm: 'https://npmjs.com/package/@nuxtjs/guess-module',
    website: 'https://github.com/nuxt-community/guess-module',
  },
  source: {
    github: 'nuxt-community/guess-module',
    npm: '@nuxtjs/guess-module',
  },
  stats: {
    stars: 20,
    downloads: {
      monthly: 140,
      weekly: 15,
    },
  },
})
