import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'pinia',
  description: 'The Vue Store that you will enjoy using',
  icon: '',
  category: 'nuxt',
  types: [
    'Extensions',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/vuejs/pinia',
    npm: 'https://npmjs.com/package/@pinia/nuxt',
    website: 'https://pinia.vuejs.org/',
  },
  source: {
    github: 'vuejs/pinia#v2/packages/nuxt',
    npm: '@pinia/nuxt',
  },
  stats: {
    stars: 14717,
    downloads: {
      monthly: 3258386,
      weekly: 864086,
    },
  },
})
