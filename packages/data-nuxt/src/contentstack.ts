import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'contentstack',
  description: 'Contentstack integration for Nuxt',
  icon: '',
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
      monthly: 239,
      weekly: 53,
    },
  },
})
