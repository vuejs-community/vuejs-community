import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'chiffre',
  description: 'Privacy-first, end-to-end encrypted analytics',
  icon: '',
  category: 'nuxt',
  types: [
    'Analytics',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/chiffre-io/nuxt-chiffre',
    npm: 'https://npmjs.com/package/nuxt-chiffre',
    website: 'https://github.com/chiffre-io/nuxt-chiffre',
  },
  source: {
    github: 'chiffre-io/nuxt-chiffre',
    npm: 'nuxt-chiffre',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 95,
      weekly: 10,
    },
  },
})
