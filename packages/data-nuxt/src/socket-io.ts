import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'socket-io',
  description: 'Socket.io client and server integration. Just plug it in and go',
  icon: '',
  category: 'nuxt',
  types: [
    'Realtime',
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
})
