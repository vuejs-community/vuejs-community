import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'swrv',
  description: 'Vercel SWR 的 Vue 实现，stale-while-revalidate 数据请求 Hooks（Kong 出品）',
  category: 'hooks',
  types: ['data-fetching', 'composable-library'],
  tags: ['hooks', 'composables', 'data-fetching', 'swr', 'vue3'],

  source: {
    github: 'Kong/swrv',
    npm: 'swrv',
  },

  links: {
    github: 'https://github.com/Kong/swrv',
    npm: 'https://www.npmjs.com/package/swrv',
    website: 'https://swrv.vercel.app',
  },

  stats: {
    stars: 2277,
    downloads: {
      monthly: 4684080,
      weekly: 1228352,
    },
  },
})
