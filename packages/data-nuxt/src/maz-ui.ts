import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'maz-ui',
  description: 'A modern Vue.js UI library with auto-import components, plugins, and composables designed for seamless Nuxt integration and enhanced developer experience.',
  category: 'nuxt',
  types: [
    'UI',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/louismazel/maz-ui',
    npm: 'https://npmjs.com/package/@maz-ui/nuxt',
    website: 'https://maz-ui.com/',
  },
  source: {
    github: 'louismazel/maz-ui#master/packages/nuxt',
    npm: '@maz-ui/nuxt',
  },
  stats: {
    stars: 565,
    downloads: {
      monthly: 3468,
      weekly: 630,
    },
  },
})
