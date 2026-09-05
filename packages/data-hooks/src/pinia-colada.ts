import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'pinia-colada',
  description: 'Vue 官方团队成员（posva）打造的智能数据请求层，基于 Pinia 提供 useQuery / useMutation',
  category: 'hooks',
  types: ['data-fetching', 'composable-library'],
  tags: ['hooks', 'composables', 'data-fetching', 'query', 'pinia', 'vue3'],

  source: {
    github: 'posva/pinia-colada',
    npm: '@pinia/colada',
  },

  links: {
    github: 'https://github.com/posva/pinia-colada',
    npm: 'https://www.npmjs.com/package/@pinia/colada',
    website: 'https://pinia-colada.esm.dev',
  },

  stats: {
    stars: 2229,
    downloads: {
      monthly: 365514,
      weekly: 99408,
    },
  },
})
