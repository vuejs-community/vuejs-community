import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'browserconfig',
  description: 'Adds XML browser configuration support',
  category: 'nuxt',
  types: [
    'Extensions',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-community/legacy-modules',
    npm: 'https://npmjs.com/package/@nuxtjs/browserconfig',
    website: 'https://github.com/nuxt-community/legacy-modules/tree/master/packages/browserconfig',
  },
  source: {
    github: 'nuxt-community/legacy-modules#master/packages/browserconfig',
    npm: '@nuxtjs/browserconfig',
  },
  stats: {
    stars: 1267,
    downloads: {
      monthly: 364,
      weekly: 44,
    },
  },
})
