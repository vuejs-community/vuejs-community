import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'imagemin',
  description: 'Automatically optimize (compress) all images used in Nuxt',
  category: 'nuxt',
  types: [
    'Images',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-community/imagemin-module',
    npm: 'https://npmjs.com/package/@nuxtjs/imagemin',
    website: 'https://github.com/nuxt-community/imagemin-module',
  },
  source: {
    github: 'nuxt-community/imagemin-module',
    npm: '@nuxtjs/imagemin',
  },
  stats: {
    stars: 50,
    downloads: {
      monthly: 381,
      weekly: 67,
    },
  },
})
