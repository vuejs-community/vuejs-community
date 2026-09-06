import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vuestic',
  description: 'Vuestic UI module for Nuxt',
  category: 'nuxt',
  types: [
    'UI',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/epicmaxco/vuestic-ui',
    npm: 'https://npmjs.com/package/@vuestic/nuxt',
    website: 'https://ui.vuestic.dev',
  },
  source: {
    github: 'epicmaxco/vuestic-ui#develop/packages/nuxt',
    npm: '@vuestic/nuxt',
  },
  stats: {
    stars: 3748,
    downloads: {
      monthly: 1237,
      weekly: 350,
    },
  },
})
