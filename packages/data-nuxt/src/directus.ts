import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'directus',
  description: 'Easily connect your Nuxt application to your directus server.',
  category: 'nuxt',
  types: [
    'CMS',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/intevel/nuxt-directus',
    npm: 'https://npmjs.com/package/nuxt-directus',
    website: 'https://nuxt-directus.de/',
  },
  source: {
    github: 'intevel/nuxt-directus',
    npm: 'nuxt-directus',
  },
  stats: {
    stars: 310,
    downloads: {
      monthly: 5777,
      weekly: 1685,
    },
  },
})
