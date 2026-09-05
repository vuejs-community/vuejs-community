import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'python',
  description: 'Write Nuxt applications using Python',
  category: 'nuxt',
  types: [
    'Extensions',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-community/python-module',
    npm: 'https://npmjs.com/package/@nuxtjs/python',
    website: 'https://github.com/nuxt-community/python-module',
  },
  source: {
    github: 'nuxt-community/python-module',
    npm: '@nuxtjs/python',
  },
  stats: {
    stars: 203,
    downloads: {
      monthly: 148,
      weekly: 23,
    },
  },
})
