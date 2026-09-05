import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'sonda',
  description: 'Bundle analyzer and visualizer',
  category: 'nuxt',
  types: [
    'Devtools',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/filipsobol/sonda',
    npm: 'https://npmjs.com/package/sonda',
    website: 'https://sonda.dev/',
  },
  source: {
    github: 'filipsobol/sonda#release/packages/sonda',
    npm: 'sonda',
  },
  stats: {
    stars: 786,
    downloads: {
      monthly: 690088,
      weekly: 145569,
    },
  },
})
