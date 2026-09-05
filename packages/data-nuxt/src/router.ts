import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'router',
  description: 'Nuxt module to use router.js instead of pages/ directory',
  category: 'nuxt',
  types: [
    'Extensions',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-community/router-module',
    npm: 'https://npmjs.com/package/@nuxtjs/router',
    website: 'https://github.com/nuxt-community/router-module',
  },
  source: {
    github: 'nuxt-community/router-module',
    npm: '@nuxtjs/router',
  },
  stats: {
    stars: 394,
    downloads: {
      monthly: 23401,
      weekly: 5889,
    },
  },
})
