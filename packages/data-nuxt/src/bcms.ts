import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'bcms',
  description: 'Nuxt BCMS module',
  category: 'nuxt',
  types: [
    'CMS',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/bcms/nuxt-module',
    npm: 'https://npmjs.com/package/@thebcms/nuxt',
    website: 'https://www.thebcms.com/',
  },
  source: {
    github: 'bcms/nuxt-module',
    npm: '@thebcms/nuxt',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 196,
      weekly: 34,
    },
  },
})
