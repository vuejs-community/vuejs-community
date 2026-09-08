import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'clerk',
  description: 'Clerk SDK for Nuxt',
  icon: 'icon:clerk',
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
    stars: 1752,
    downloads: {
      monthly: 99527,
      weekly: 14887,
    },
  },
})
