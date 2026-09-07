import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'icon',
  description: 'Icon module for Nuxt with 200,000+ ready to use icons from Iconify.',
  icon: 'logos:nuxt-icon',
  category: 'nuxt',
  types: [
    'UI',
  ],
  filter: [
    'official',
  ],
  links: {
    github: 'https://github.com/nuxt/icon',
    npm: 'https://npmjs.com/package/@nuxt/icon',
    website: 'https://github.com/nuxt/icon',
  },
  source: {
    github: 'nuxt/icon',
    npm: '@nuxt/icon',
  },
  stats: {
    stars: 1197,
    downloads: {
      monthly: 2769231,
      weekly: 660766,
    },
  },
})
