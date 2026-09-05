import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'fullpage',
  description: 'Nuxt module for fullpage-vue plugin',
  category: 'nuxt',
  types: [
    'CSS',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/vaso2/fullpage-nuxt',
    npm: 'https://npmjs.com/package/fullpage-nuxt',
    website: 'https://github.com/vaso2/fullpage-nuxt',
  },
  source: {
    github: 'vaso2/fullpage-nuxt',
    npm: 'fullpage-nuxt',
  },
  stats: {
    stars: 24,
    downloads: {
      monthly: 130,
      weekly: 27,
    },
  },
})
