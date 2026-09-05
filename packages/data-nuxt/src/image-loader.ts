import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'image-loader',
  description: 'An image loader module for nuxt.js that allows you to configure image style derivatives.',
  category: 'nuxt',
  types: [
    'Images',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/PivaleCo/nuxt-image-loader-module',
    npm: 'https://npmjs.com/package/@pivale/nuxt-image-loader-module',
    website: 'https://github.com/PivaleCo/nuxt-image-loader-module',
  },
  source: {
    github: 'PivaleCo/nuxt-image-loader-module',
    npm: '@pivale/nuxt-image-loader-module',
  },
  stats: {
    stars: 140,
    downloads: {
      monthly: 51,
      weekly: 15,
    },
  },
})
