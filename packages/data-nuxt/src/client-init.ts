import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'client-init',
  description: 'Provide client version of `nuxtServerInit`.',
  category: 'nuxt',
  types: [
    'Extensions',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/potato4d/nuxt-client-init-module',
    npm: 'https://npmjs.com/package/nuxt-client-init-module',
    website: 'https://github.com/potato4d/nuxt-client-init-module',
  },
  source: {
    github: 'potato4d/nuxt-client-init-module',
    npm: 'nuxt-client-init-module',
  },
  stats: {
    stars: 235,
    downloads: {
      monthly: 10154,
      weekly: 2439,
    },
  },
})
