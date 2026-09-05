import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'contentstack',
  description: 'Contentstack integration for Nuxt',
  category: 'nuxt',
  types: [
    'CMS',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/timbenniks/nuxt-contentstack',
    npm: 'https://npmjs.com/package/nuxt-contentstack',
    website: 'https://github.com/timbenniks/nuxt-contentstack',
  },
  source: {
    github: 'timbenniks/nuxt-contentstack',
    npm: 'nuxt-contentstack',
  },
  stats: {
    stars: 7,
    downloads: {
      monthly: 323,
      weekly: 87,
    },
  },
})
