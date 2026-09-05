import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'convex',
  description: 'Nuxt module for Convex - reactive backend with real-time sync, file storage, and auto-imports',
  category: 'nuxt',
  types: [
    'Database',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/onmax/nuxt-convex',
    npm: 'https://npmjs.com/package/convex-monorepo',
    website: 'https://nuxt-convex.onmax.me',
  },
  source: {
    github: 'onmax/nuxt-convex',
    npm: 'convex-monorepo',
  },
  stats: {
    stars: 21,
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
