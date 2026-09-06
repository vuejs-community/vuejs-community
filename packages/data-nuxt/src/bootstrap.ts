import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'bootstrap',
  description: 'Add Bootstrap to your Nuxt app in seconds.',
  category: 'nuxt',
  types: [
    'UI',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/bootstrap-vue/bootstrap-vue',
    npm: 'https://npmjs.com/package/bootstrap-vue',
    website: 'https://bootstrap-vue.org/docs#nuxtjs-module',
  },
  source: {
    github: 'bootstrap-vue/bootstrap-vue',
    npm: 'bootstrap-vue',
  },
  stats: {
    stars: 14427,
    downloads: {
      monthly: 815408,
      weekly: 212570,
    },
  },
})
