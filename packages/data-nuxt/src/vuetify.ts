import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vuetify',
  description: 'Vuetify Module for Nuxt to add Material Design components to your application.',
  category: 'nuxt',
  types: [
    'UI',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-community/vuetify-module',
    npm: 'https://npmjs.com/package/@nuxtjs/vuetify',
    website: 'https://github.com/nuxt-community/vuetify-module',
  },
  source: {
    github: 'nuxt-community/vuetify-module',
    npm: '@nuxtjs/vuetify',
  },
  stats: {
    stars: 634,
    downloads: {
      monthly: 106871,
      weekly: 26664,
    },
  },
})
