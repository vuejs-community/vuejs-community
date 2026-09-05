import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'prepare',
  description: 'Initialization steps at build time – like Nuxt 2 server init',
  category: 'nuxt',
  types: [
    'Devtools',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/johannschopplich/nuxt-prepare',
    npm: 'https://npmjs.com/package/nuxt-prepare',
    website: 'https://nuxt-prepare.byjohann.dev',
  },
  source: {
    github: 'johannschopplich/nuxt-prepare',
    npm: 'nuxt-prepare',
  },
  stats: {
    stars: 104,
    downloads: {
      monthly: 4032,
      weekly: 694,
    },
  },
})
