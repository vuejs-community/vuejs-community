import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'resend',
  description: 'Resend integration for Nuxt',
  category: 'nuxt',
  types: [
    'Extensions',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/nhedger/nuxt-resend',
    npm: 'https://npmjs.com/package/nuxt-resend',
    website: 'https://github.com/nhedger/nuxt-resend',
  },
  source: {
    github: 'nhedger/nuxt-resend',
    npm: 'nuxt-resend',
  },
  stats: {
    stars: 30,
    downloads: {
      monthly: 3125,
      weekly: 446,
    },
  },
})
