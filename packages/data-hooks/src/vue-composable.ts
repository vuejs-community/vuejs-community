import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vue-composable',
  description: 'Vue composition-api composable components. i18n, validation, pagination, fetch, etc. +50 different composables',
  icon: 'icon:vue-composable',
  category: 'hooks',
  types: ['composable-library'],
  tags: ['hooks', 'composables', 'vue3'],

  source: {
    github: 'pikax/vue-composable',
    npm: 'vue-composable',
  },

  links: {
    github: 'https://github.com/pikax/vue-composable',
    npm: 'https://www.npmjs.com/package/vue-composable',
    website: 'https://vue-composable.netlify.app',
  },

  stats: {
    stars: 1178,
    downloads: {
      monthly: 18574,
      weekly: 4406,
    },
  },
})
