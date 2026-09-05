import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'eslint-module',
  description: 'ESLint module for Nuxt',
  category: 'nuxt',
  types: [
    'Devtools',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-modules/eslint',
    npm: 'https://npmjs.com/package/@nuxtjs/eslint-module',
    website: 'https://github.com/nuxt-modules/eslint',
  },
  source: {
    github: 'nuxt-modules/eslint',
    npm: '@nuxtjs/eslint-module',
  },
  stats: {
    stars: 167,
    downloads: {
      monthly: 349959,
      weekly: 87075,
    },
  },
})
