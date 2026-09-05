import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'localtunnel',
  description: 'exposes your localhost to the world for easy testing and sharing',
  category: 'nuxt',
  types: [
    'Devtools',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-community/legacy-modules',
    npm: 'https://npmjs.com/package/@nuxtjs/localtunnel',
    website: 'https://github.com/nuxt-community/legacy-modules/tree/master/packages/localtunnel',
  },
  source: {
    github: 'nuxt-community/legacy-modules#master/packages/localtunnel',
    npm: '@nuxtjs/localtunnel',
  },
  stats: {
    stars: 1267,
    downloads: {
      monthly: 383,
      weekly: 107,
    },
  },
})
