import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'robots',
  description: 'Tame the robots crawling and indexing your Nuxt site.',
  category: 'nuxt',
  types: [
    'SEO',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-modules/robots',
    npm: 'https://npmjs.com/package/@nuxtjs/robots',
    website: 'https://github.com/nuxt-modules/robots',
  },
  source: {
    github: 'nuxt-modules/robots',
    npm: '@nuxtjs/robots',
  },
  stats: {
    stars: 525,
    downloads: {
      monthly: 887503,
      weekly: 229011,
    },
  },
})
