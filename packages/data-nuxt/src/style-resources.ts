import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'style-resources',
  description: 'Nuxt Style Resources - Share variables, mixins, functions across all style files (no @import needed)',
  category: 'nuxt',
  types: [
    'CSS',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-modules/style-resources',
    npm: 'https://npmjs.com/package/@nuxtjs/style-resources',
    website: 'https://github.com/nuxt-modules/style-resources',
  },
  source: {
    github: 'nuxt-modules/style-resources',
    npm: '@nuxtjs/style-resources',
  },
  stats: {
    stars: 597,
    downloads: {
      monthly: 185054,
      weekly: 44110,
    },
  },
})
