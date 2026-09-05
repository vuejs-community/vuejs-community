import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'radash',
  description: 'radash module with auto-import and custom prefix',
  category: 'nuxt',
  types: [
    'Libraries',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/bbg/nuxt-radash',
    npm: 'https://npmjs.com/package/nuxt-radash',
    website: 'https://github.com/bbg/nuxt-radash#readme',
  },
  source: {
    github: 'bbg/nuxt-radash',
    npm: 'nuxt-radash',
  },
  stats: {
    stars: 20,
    downloads: {
      monthly: 674,
      weekly: 246,
    },
  },
})
