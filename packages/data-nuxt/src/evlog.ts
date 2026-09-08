import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'evlog',
  description: 'Wide events and structured errors for TypeScript. One log per request. Full context.',
  icon: 'icon:evlog',
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
    stars: 1847,
    downloads: {
      monthly: 937401,
      weekly: 197991,
    },
  },
})
