import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'socket-io',
  description: 'Socket.io client and server module for Nuxt. Just plug it in and GO',
  category: 'nuxt',
  types: [
    'Request',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/richardeschloss/nuxt-socket-io',
    npm: 'https://npmjs.com/package/nuxt-socket-io',
    website: 'https://nuxt-socket-io.netlify.app/',
  },
  source: {
    github: 'richardeschloss/nuxt-socket-io',
    npm: 'nuxt-socket-io',
  },
  stats: {
    stars: 266,
    downloads: {
      monthly: 11130,
      weekly: 3466,
    },
  },
})
