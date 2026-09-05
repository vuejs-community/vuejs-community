import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vue-request',
  description: '请求状态管理库，支持 SWR、轮询、错误重试、缓存、分页等，中文文档完善',
  category: 'hooks',
  types: ['data-fetching', 'composable-library'],
  tags: ['hooks', 'composables', 'data-fetching', 'swr', 'vue3'],

  source: {
    github: 'AttoJS/vue-request',
    npm: 'vue-request',
  },

  links: {
    github: 'https://github.com/AttoJS/vue-request',
    npm: 'https://www.npmjs.com/package/vue-request',
    website: 'https://vue-request.attojs.com',
  },

  stats: {
    stars: 1396,
    downloads: {
      monthly: 15024,
      weekly: 3571,
    },
  },
})
