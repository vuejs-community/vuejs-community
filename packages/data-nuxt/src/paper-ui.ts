import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'paper-ui',
  description: 'A ui kit for nuxt',
  category: 'nuxt',
  types: [
    'UI',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/paper-kit/nuxt',
    npm: 'https://npmjs.com/package/@paper-ui/nuxt',
    website: 'https://paper-docs.nuxt.space/',
  },
  source: {
    github: 'paper-kit/nuxt',
    npm: '@paper-ui/nuxt',
  },
  stats: {
    stars: 64,
    downloads: {
      monthly: 146,
      weekly: 28,
    },
  },
})
