import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'netlify',
  description: 'Local emulation of the Netlify platform in development',
  category: 'nuxt',
  types: [
    'Deployment',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/netlify/framework-adapters',
    npm: 'https://npmjs.com/package/@netlify/nuxt',
    website: 'https://github.com/netlify/framework-adapters#readme',
  },
  source: {
    github: 'netlify/framework-adapters#main/packages/nuxt-module',
    npm: '@netlify/nuxt',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 7520,
      weekly: 2265,
    },
  },
})
