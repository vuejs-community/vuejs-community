import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'betterstack',
  description: 'A Nuxt module for integrating BetterStack into your Nuxt application',
  category: 'nuxt',
  types: [
    'Extensions',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/nicogenz/nuxt-betterstack',
    npm: 'https://npmjs.com/package/nuxt-betterstack',
    website: 'https://github.com/nicogenz/nuxt-betterstack',
  },
  source: {
    github: 'nicogenz/nuxt-betterstack',
    npm: 'nuxt-betterstack',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 659,
      weekly: 103,
    },
  },
})
