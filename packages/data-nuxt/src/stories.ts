import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'stories',
  description: 'Nuxt stories module -- Painless storybooking for Nuxt',
  category: 'nuxt',
  types: [
    'Devtools',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/richardeschloss/nuxt-stories',
    npm: 'https://npmjs.com/package/nuxt-stories',
    website: 'https://github.com/richardeschloss/nuxt-stories',
  },
  source: {
    github: 'richardeschloss/nuxt-stories',
    npm: 'nuxt-stories',
  },
  stats: {
    stars: 90,
    downloads: {
      monthly: 224,
      weekly: 34,
    },
  },
})
