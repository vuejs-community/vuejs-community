import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'nuxt-safe-runtime-config',
  description: 'Validate Nuxt runtime config with Standard Schema at build time',
  category: 'nuxt',
  types: [
    'Devtools',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/onmax/nuxt-safe-runtime-config',
    npm: 'https://npmjs.com/package/nuxt-safe-runtime-config',
    website: 'https://nuxt-safe-runtime-config.onmax.me',
  },
  source: {
    github: 'onmax/nuxt-safe-runtime-config#main',
    npm: 'nuxt-safe-runtime-config',
  },
  stats: {
    stars: 32,
    downloads: {
      monthly: 2802,
      weekly: 484,
    },
  },
})
