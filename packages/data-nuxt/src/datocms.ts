import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'datocms',
  description: 'DatoCMS module for Nuxt',
  category: 'nuxt',
  types: [
    'CMS',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/hex-digital/nuxt-datocms',
    npm: 'https://npmjs.com/package/@hexdigital/nuxt-datocms',
    website: 'https://github.com/hex-digital/nuxt-datocms#readme',
  },
  source: {
    github: 'hex-digital/nuxt-datocms',
    npm: '@hexdigital/nuxt-datocms',
  },
  stats: {
    stars: 7,
    downloads: {
      monthly: 129,
      weekly: 36,
    },
  },
})
