import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'uni-ajax',
  description: '轻量级 uni-app HTTP 客户端，拦截器与全局配置友好',
  category: 'uniapp',
  types: ['data-fetching'],
  tags: ['uni-app', 'request', 'http', 'ajax'],

  source: {
    github: 'ponjs/uni-ajax',
    npm: 'uni-ajax',
  },

  links: {
    github: 'https://github.com/ponjs/uni-ajax',
    npm: 'https://www.npmjs.com/package/uni-ajax',
    website: 'https://uniajax.ponjs.com',
  },

  stats: {
    stars: 75,
    downloads: {
      monthly: 385,
      weekly: 59,
    },
  },
})
