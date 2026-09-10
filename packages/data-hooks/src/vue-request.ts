import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vue-request',
  description: '⚡️ This is a library that can easily help you manage request states, supporting common features such as SWR, polling, error retry, caching, and pagination, etc. ⚡️ 这是一个能够轻松帮助你管理请求状态的库，支持 SWR、轮询、错误重试、缓存、分页等常用功能。',
  icon: 'dinkie-icons:hook',
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
      monthly: 13532,
      weekly: 3329,
    },
  },
})
