import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'dotenv',
  description: 'A Nuxt module that loads your .env file into your context options',
  category: 'nuxt',
  types: [
    'Extensions',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-community/dotenv-module',
    npm: 'https://npmjs.com/package/@nuxtjs/dotenv',
    website: 'https://github.com/nuxt-community/dotenv-module',
  },
  source: {
    github: 'nuxt-community/dotenv-module',
    npm: '@nuxtjs/dotenv',
  },
  stats: {
    stars: 493,
    downloads: {
      monthly: 147764,
      weekly: 34391,
    },
  },
})
