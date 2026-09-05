import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'uni-network',
  description: 'uni-helper 出品的 uni-app HTTP 客户端，基于 Promise，API 对标 axios',
  category: 'uniapp',
  types: ['data-fetching'],
  tags: ['uni-app', 'vue3', 'request', 'http'],

  source: {
    github: 'uni-helper/uni-network',
    npm: '@uni-helper/uni-network',
  },

  links: {
    github: 'https://github.com/uni-helper/uni-network',
    npm: 'https://www.npmjs.com/package/@uni-helper/uni-network',
  },

  stats: {
    stars: 127,
    downloads: {
      monthly: 875,
      weekly: 215,
    },
  },
})
