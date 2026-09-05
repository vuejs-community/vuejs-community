import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'tanstack-vue-query',
  description: 'TanStack Query 的 Vue 适配层，为 Vue 3 提供异步状态管理、缓存与数据请求',
  category: 'hooks',
  types: ['data-fetching', 'composable-library'],
  tags: ['hooks', 'composables', 'data-fetching', 'query', 'vue3'],

  source: {
    github: 'TanStack/query',
    npm: '@tanstack/vue-query',
  },

  links: {
    github: 'https://github.com/TanStack/query',
    npm: 'https://www.npmjs.com/package/@tanstack/vue-query',
    website: 'https://tanstack.com/query/latest/docs/framework/vue/overview',
  },

  stats: {
    stars: 50268,
    downloads: {
      monthly: 2884420,
      weekly: 784128,
    },
  },
})
