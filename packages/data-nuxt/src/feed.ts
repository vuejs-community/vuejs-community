import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'feed',
  description: 'Feed module enables everyone to have RSS, Atom and JSON.',
  category: 'nuxt',
  types: [
    'SEO',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-community/feed-module',
    npm: 'https://npmjs.com/package/@nuxtjs/feed',
    website: 'https://github.com/nuxt-community/feed-module',
  },
  source: {
    github: 'nuxt-community/feed-module',
    npm: '@nuxtjs/feed',
  },
  stats: {
    stars: 227,
    downloads: {
      monthly: 2495,
      weekly: 587,
    },
  },
})
