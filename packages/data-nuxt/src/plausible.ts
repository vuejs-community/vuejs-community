import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'plausible',
  description: 'Nuxt module to natively integrate Plausible analytics',
  category: 'nuxt',
  types: [
    'Analytics',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-modules/plausible',
    npm: 'https://npmjs.com/package/@nuxtjs/plausible',
    website: 'https://github.com/nuxt-modules/plausible',
  },
  source: {
    github: 'nuxt-modules/plausible',
    npm: '@nuxtjs/plausible',
  },
  stats: {
    stars: 119,
    downloads: {
      monthly: 40445,
      weekly: 9540,
    },
  },
})
