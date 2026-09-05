import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'clerk',
  description: 'Clerk SDK for Nuxt',
  category: 'nuxt',
  types: [
    'Security',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/clerk/javascript',
    npm: 'https://npmjs.com/package/@clerk/nuxt',
    website: 'https://clerk.com/docs/reference/nuxt/overview',
  },
  source: {
    github: 'clerk/javascript#main/packages/nuxt',
    npm: '@clerk/nuxt',
  },
  stats: {
    stars: 1749,
    downloads: {
      monthly: 105007,
      weekly: 16664,
    },
  },
})
