import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'tanstack-vue-query',
  description: '🤖 Powerful asynchronous state management, server-state utilities and data fetching for the web. TS/JS, React Query, Solid Query, Svelte Query and Vue Query.',
  icon: 'thesvg-color:tanstack',
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
    stars: 50274,
    downloads: {
      monthly: 2766231,
      weekly: 652675,
    },
  },
})
