import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vuefire',
  description: 'Idiomatic composables for the Firebase SDK',
  category: 'nuxt',
  types: [
    'Database',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/vuejs/vuefire',
    npm: 'https://npmjs.com/package/nuxt-vuefire',
    website: 'https://vuefire.vuejs.org/',
  },
  source: {
    github: 'vuejs/vuefire#main/packages/nuxt',
    npm: 'nuxt-vuefire',
  },
  stats: {
    stars: 3909,
    downloads: {
      monthly: 42948,
      weekly: 11442,
    },
  },
})
