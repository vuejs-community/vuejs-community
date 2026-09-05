import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'webpack-profile',
  description: 'Nuxt module to display webpack build progress steps with core ProgressPlugin',
  category: 'nuxt',
  types: [
    'Devtools',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-community/webpack-profile-module',
    npm: 'https://npmjs.com/package/@nuxtjs/webpack-profile',
    website: 'https://github.com/nuxt-community/webpack-profile-module',
  },
  source: {
    github: 'nuxt-community/webpack-profile-module',
    npm: '@nuxtjs/webpack-profile',
  },
  stats: {
    stars: 8,
    downloads: {
      monthly: 2479,
      weekly: 377,
    },
  },
})
