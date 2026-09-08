import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'sonda',
  description: 'Bundle analyzer and visualizer',
  icon: 'icon:sonda',
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
    stars: 785,
    downloads: {
      monthly: 607576,
      weekly: 106075,
    },
  },
})
