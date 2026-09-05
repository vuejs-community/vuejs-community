import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'uni-promises',
  description: 'uni-helper 出品的 uni-app API Promise 化封装，配合 async / await 使用',
  category: 'uniapp',
  types: ['utility-library'],
  tags: ['uni-app', 'vue3', 'promise', 'api'],

  source: {
    github: 'uni-helper/uni-promises',
    npm: '@uni-helper/uni-promises',
  },

  links: {
    github: 'https://github.com/uni-helper/uni-promises',
    npm: 'https://www.npmjs.com/package/@uni-helper/uni-promises',
  },

  stats: {
    stars: 13,
    downloads: {
      monthly: 400,
      weekly: 76,
    },
  },
})
