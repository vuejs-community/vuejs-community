import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vendor',
  description: 'directly serve node_modules',
  category: 'nuxt',
  types: [
    'Extensions',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-community/legacy-modules',
    npm: 'https://npmjs.com/package/@nuxtjs/vendor',
    website: 'https://github.com/nuxt-community/legacy-modules/tree/master/packages/vendor',
  },
  source: {
    github: 'nuxt-community/legacy-modules#master/packages/vendor',
    npm: '@nuxtjs/vendor',
  },
  stats: {
    stars: 1267,
    downloads: {
      monthly: 340,
      weekly: 37,
    },
  },
})
