import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vuetify-nuxt-module',
  description: 'Zero-config Nuxt Module for Vuetify.',
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
    stars: 286,
    downloads: {
      monthly: 195661,
      weekly: 47981,
    },
  },
})
