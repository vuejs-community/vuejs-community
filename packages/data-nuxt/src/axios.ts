import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'axios',
  description: 'Secure and easy Axios module with Nuxt',
  category: 'nuxt',
  types: [
    'Request',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-community/axios-module',
    npm: 'https://npmjs.com/package/@nuxtjs/axios',
    website: 'https://axios.nuxtjs.org',
  },
  source: {
    github: 'nuxt-community/axios-module',
    npm: '@nuxtjs/axios',
  },
  stats: {
    stars: 1187,
    downloads: {
      monthly: 384938,
      weekly: 92734,
    },
  },
})
