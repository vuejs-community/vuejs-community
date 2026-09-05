import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'well-known',
  description: 'A Nuxt module to add well-known URIs using middlewares',
  category: 'nuxt',
  types: [
    'SEO',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/zadigetvoltaire/nuxt-well-known',
    npm: 'https://npmjs.com/package/@zadigetvoltaire/nuxt-well-known',
    website: 'https://github.com/zadigetvoltaire/nuxt-well-known#readme',
  },
  source: {
    github: 'zadigetvoltaire/nuxt-well-known',
    npm: '@zadigetvoltaire/nuxt-well-known',
  },
  stats: {
    stars: 22,
    downloads: {
      monthly: 3368,
      weekly: 1019,
    },
  },
})
