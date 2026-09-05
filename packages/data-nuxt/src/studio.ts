import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'studio',
  description: 'A new experience to build content-driven website with Nuxt.',
  category: 'nuxt',
  types: [
    'CMS',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-content/nuxt-studio',
    npm: 'https://npmjs.com/package/nuxt-studio',
    website: 'https://nuxt.studio',
  },
  source: {
    github: 'nuxt-content/nuxt-studio',
    npm: 'nuxt-studio',
  },
  stats: {
    stars: 719,
    downloads: {
      monthly: 29506,
      weekly: 7183,
    },
  },
})
