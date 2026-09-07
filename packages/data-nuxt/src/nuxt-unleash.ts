import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'nuxt-unleash',
  description: 'Nuxt module to use Unleash toggle feature services',
  icon: 'icon:nuxt-unleash',
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
      monthly: 90,
      weekly: 20,
    },
  },
})
