import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'lettermint',
  description: 'Nuxt module for sending emails with Lettermint',
  category: 'nuxt',
  types: [
    'Extensions',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/lettermint/nuxt-lettermint',
    npm: 'https://npmjs.com/package/nuxt-lettermint',
    website: 'https://github.com/lettermint/nuxt-lettermint',
  },
  source: {
    github: 'lettermint/nuxt-lettermint',
    npm: 'nuxt-lettermint',
  },
  stats: {
    stars: 13,
    downloads: {
      monthly: 762,
      weekly: 383,
    },
  },
})
