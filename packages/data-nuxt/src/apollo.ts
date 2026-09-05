import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'apollo',
  description: 'Integrate GraphQL in your Nuxt apps using vue-apollo.',
  category: 'nuxt',
  types: [
    'Request',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-modules/apollo',
    npm: 'https://npmjs.com/package/@nuxtjs/apollo',
    website: 'https://apollo.nuxtjs.org',
  },
  source: {
    github: 'nuxt-modules/apollo',
    npm: '@nuxtjs/apollo',
  },
  stats: {
    stars: 986,
    downloads: {
      monthly: 86312,
      weekly: 20474,
    },
  },
})
