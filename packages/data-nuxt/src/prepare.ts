import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'prepare',
  description: 'Initialization steps at build time, like nuxtServerInit',
  icon: 'icon:prepare',
  category: 'nuxt',
  types: [
    'Utilities',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/johannschopplich/nuxt-prepare',
    npm: 'https://npmjs.com/package/nuxt-prepare',
    website: 'https://nuxt-prepare.byjohann.dev',
  },
  source: {
    github: 'johannschopplich/nuxt-prepare',
    npm: 'nuxt-prepare',
  },
})
