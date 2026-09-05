import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'security',
  description: 'Security Module for Nuxt based on OWASP Top 10 and Helmet',
  category: 'nuxt',
  types: [
    'Security',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/Baroshem/nuxt-security',
    npm: 'https://npmjs.com/package/nuxt-security',
    website: 'https://nuxt-security.vercel.app/',
  },
  source: {
    github: 'Baroshem/nuxt-security',
    npm: 'nuxt-security',
  },
  stats: {
    stars: 979,
    downloads: {
      monthly: 655447,
      weekly: 162360,
    },
  },
})
