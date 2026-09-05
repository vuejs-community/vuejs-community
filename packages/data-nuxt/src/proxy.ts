import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'proxy',
  description: 'The one-liner node.js http-proxy middleware solution for Nuxt using http-proxy-middleware',
  category: 'nuxt',
  types: [
    'Request',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-community/proxy-module',
    npm: 'https://npmjs.com/package/@nuxtjs/proxy',
    website: 'https://github.com/nuxt-community/proxy-module',
  },
  source: {
    github: 'nuxt-community/proxy-module',
    npm: '@nuxtjs/proxy',
  },
  stats: {
    stars: 407,
    downloads: {
      monthly: 421275,
      weekly: 100716,
    },
  },
})
