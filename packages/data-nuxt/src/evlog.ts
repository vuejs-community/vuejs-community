import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'evlog',
  description: 'Wide events and structured errors for TypeScript. One log per request. Full context.',
  category: 'nuxt',
  types: [
    'Monitoring',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/evloghq/evlog',
    npm: 'https://npmjs.com/package/evlog',
    website: 'https://www.evlog.dev/',
  },
  source: {
    github: 'evloghq/evlog#main/packages/evlog',
    npm: 'evlog',
  },
  stats: {
    stars: 1839,
    downloads: {
      monthly: 1033317,
      weekly: 252778,
    },
  },
})
