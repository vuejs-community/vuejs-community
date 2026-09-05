import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'purgecss',
  description: 'Drop superfluous CSS! A neat PurgeCSS wrapper for Nuxt',
  category: 'nuxt',
  types: [
    'CSS',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/Developmint/nuxt-purgecss',
    npm: 'https://npmjs.com/package/nuxt-purgecss',
    website: 'https://github.com/Developmint/nuxt-purgecss',
  },
  source: {
    github: 'Developmint/nuxt-purgecss#main',
    npm: 'nuxt-purgecss',
  },
  stats: {
    stars: 499,
    downloads: {
      monthly: 35005,
      weekly: 8112,
    },
  },
})
