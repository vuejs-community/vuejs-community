import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'convex',
  description: 'Convex integration: reactive backend with real-time sync, file storage, and auto-imports',
  icon: 'icon:convex',
  category: 'nuxt',
  types: [
    'Database',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/onmax/nuxt-convex',
    npm: 'https://npmjs.com/package/nuxt-convex',
    website: 'https://nuxt-convex.onmax.me',
  },
  source: {
    github: 'onmax/nuxt-convex',
    npm: 'nuxt-convex',
  },
})
