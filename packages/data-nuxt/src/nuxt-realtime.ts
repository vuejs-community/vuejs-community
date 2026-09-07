import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'nuxt-realtime',
  description: 'Real-time state synchronization for Nuxt applications. Share reactive state across clients, broadcast events, and manage connections.',
  icon: 'icon:nuxt-realtime',
  category: 'nuxt',
  types: [
    'Libraries',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/daanvangeloven/nuxt-realtime',
    npm: 'https://npmjs.com/package/nuxt-realtime',
    website: 'https://nuxtrealtime.com/',
  },
  source: {
    github: 'daanvangeloven/nuxt-realtime',
    npm: 'nuxt-realtime',
  },
  stats: {
    stars: 32,
    downloads: {
      monthly: 148,
      weekly: 15,
    },
  },
})
