import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'formkit',
  description: 'Seamless FormKit integration for Nuxt',
  category: 'nuxt',
  types: [
    'Libraries',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/formkit/formkit',
    npm: 'https://npmjs.com/package/@formkit/nuxt',
    website: 'https://formkit.com',
  },
  source: {
    github: 'formkit/formkit#master/packages/nuxt',
    npm: '@formkit/nuxt',
  },
  stats: {
    stars: 4757,
    downloads: {
      monthly: 103340,
      weekly: 23547,
    },
  },
})
