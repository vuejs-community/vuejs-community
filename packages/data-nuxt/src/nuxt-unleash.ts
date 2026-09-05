import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'nuxt-unleash',
  description: 'Nuxt module to use Unleash toggle feature services',
  category: 'nuxt',
  types: [
    'Deployment',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/conejerock/nuxt-unleash',
    npm: 'https://npmjs.com/package/nuxt-unleash',
    website: 'https://github.com/conejerock/nuxt-unleash',
  },
  source: {
    github: 'conejerock/nuxt-unleash',
    npm: 'nuxt-unleash',
  },
  stats: {
    stars: 21,
    downloads: {
      monthly: 92,
      weekly: 20,
    },
  },
})
