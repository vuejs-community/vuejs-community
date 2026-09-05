import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'csurf',
  description: 'Cross-Site Request Forgery (CSRF) Prevention for Nuxt',
  category: 'nuxt',
  types: [
    'Security',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/morgbn/nuxt-csurf',
    npm: 'https://npmjs.com/package/nuxt-csurf',
    website: 'https://github.com/morgbn/nuxt-csurf',
  },
  source: {
    github: 'morgbn/nuxt-csurf',
    npm: 'nuxt-csurf',
  },
  stats: {
    stars: 90,
    downloads: {
      monthly: 671452,
      weekly: 165735,
    },
  },
})
