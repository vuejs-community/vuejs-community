import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'jasy',
  description: 'Author PDFs as Vue components in Nuxt - client or server, zero-config. ZUGFeRD/XRechnung ready.',
  category: 'nuxt',
  types: [
    'Libraries',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/jasy-pdf/jasy',
    npm: 'https://npmjs.com/package/@jasy/nuxt',
    website: 'https://jasy.dev',
  },
  source: {
    github: 'jasy-pdf/jasy#main/packages/nuxt',
    npm: '@jasy/nuxt',
  },
  stats: {
    stars: 44,
    downloads: {
      monthly: 565,
      weekly: 226,
    },
  },
})
