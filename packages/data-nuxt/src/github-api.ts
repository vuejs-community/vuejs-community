import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'github-api',
  description: 'Nuxt module for GitHub v4 API',
  category: 'nuxt',
  types: [
    'Request',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/lindsaykwardell/nuxt-github-api',
    npm: 'https://npmjs.com/package/nuxt-github-api',
    website: 'https://github.com/lindsaykwardell/nuxt-github-api',
  },
  source: {
    github: 'lindsaykwardell/nuxt-github-api',
    npm: 'nuxt-github-api',
  },
  stats: {
    stars: 23,
    downloads: {
      monthly: 72,
      weekly: 17,
    },
  },
})
