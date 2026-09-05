import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vue-promised',
  description: '组合式 Promise 封装，将异步状态渲染为组件与 composables',
  category: 'hooks',
  types: ['data-fetching', 'composable-library'],
  tags: ['hooks', 'composables', 'data-fetching', 'promise', 'vue3'],

  source: {
    github: 'posva/vue-promised',
    npm: 'vue-promised',
  },

  links: {
    github: 'https://github.com/posva/vue-promised',
    npm: 'https://www.npmjs.com/package/vue-promised',
    website: 'https://vue-promised.netlify.app',
  },

  stats: {
    stars: 1929,
    downloads: {
      monthly: 14050,
      weekly: 2960,
    },
  },
})
