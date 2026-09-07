import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'ionic',
  description: 'Batteries-included Ionic integration for building iOS, Android and web apps.',
  icon: 'icon:ionic',
  category: 'nuxt',
  types: [
    'Libraries',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-modules/ionic',
    npm: 'https://npmjs.com/package/@nuxtjs/ionic',
    website: 'https://ionic.nuxtjs.org',
  },
  source: {
    github: 'nuxt-modules/ionic',
    npm: '@nuxtjs/ionic',
  },
  stats: {
    stars: 457,
    downloads: {
      monthly: 8924,
      weekly: 1677,
    },
  },
})
