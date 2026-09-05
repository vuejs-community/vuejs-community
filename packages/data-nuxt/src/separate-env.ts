import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'separate-env',
  description: 'Separated environment variables for server and client builds',
  category: 'nuxt',
  types: [
    'Extensions',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-community/separate-env-module',
    npm: 'https://npmjs.com/package/@nuxtjs/separate-env',
    website: 'https://github.com/nuxt-community/separate-env-module',
  },
  source: {
    github: 'nuxt-community/separate-env-module',
    npm: '@nuxtjs/separate-env',
  },
  stats: {
    stars: 57,
    downloads: {
      monthly: 313,
      weekly: 85,
    },
  },
})
