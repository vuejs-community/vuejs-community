import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'lunr',
  description: 'Full-text search with pre-build indexes for Nuxt using lunr.js',
  icon: '',
  category: 'nuxt',
  types: [
    'Libraries',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-community/lunr-module',
    npm: 'https://npmjs.com/package/@nuxtjs/lunr-module',
    website: 'https://github.com/nuxt-community/lunr-module',
  },
  source: {
    github: 'nuxt-community/lunr-module',
    npm: '@nuxtjs/lunr-module',
  },
  stats: {
    stars: 46,
    downloads: {
      monthly: 8584,
      weekly: 2564,
    },
  },
})
