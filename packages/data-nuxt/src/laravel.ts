import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'laravel',
  description: 'Nuxt cli extension for use with laravel as backend',
  category: 'nuxt',
  types: [
    'CMS',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/m2sd/nuxt-laravel',
    npm: 'https://npmjs.com/package/nuxt-laravel',
    website: 'https://github.com/m2sd/nuxt-laravel',
  },
  source: {
    github: 'm2sd/nuxt-laravel',
    npm: 'nuxt-laravel',
  },
  stats: {
    stars: 101,
    downloads: {
      monthly: 318,
      weekly: 43,
    },
  },
})
