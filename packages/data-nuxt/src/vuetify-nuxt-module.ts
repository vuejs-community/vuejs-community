import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vuetify-nuxt-module',
  description: 'Zero-config Nuxt Module for Vuetify.',
  icon: 'icon:vuetify-logo-v3-dark',
  category: 'nuxt',
  types: [
    'UI',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/vuetifyjs/nuxt-module',
    npm: 'https://npmjs.com/package/vuetify-nuxt-module',
    website: 'https://nuxt.vuetifyjs.com/',
  },
  source: {
    github: 'vuetifyjs/nuxt-module#main/packages/vuetify-nuxt-module',
    npm: 'vuetify-nuxt-module',
  },
  stats: {
    stars: 285,
    downloads: {
      monthly: 177190,
      weekly: 34925,
    },
  },
})
