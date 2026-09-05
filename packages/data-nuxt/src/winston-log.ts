import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'winston-log',
  description: 'Nuxt module for logging SSR errors + client-side Vue errors using winston',
  category: 'nuxt',
  types: [
    'Monitoring',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/aaronransley/nuxt-winston-log',
    npm: 'https://npmjs.com/package/nuxt-winston-log',
    website: 'https://github.com/aaronransley/nuxt-winston-log',
  },
  source: {
    github: 'aaronransley/nuxt-winston-log',
    npm: 'nuxt-winston-log',
  },
  stats: {
    stars: 46,
    downloads: {
      monthly: 2453,
      weekly: 583,
    },
  },
})
