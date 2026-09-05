import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'luch-request',
  description: '基于 Promise 的 uni-app 跨平台请求库，拦截器 / 上传下载 / 全局配置，uni-app 生态使用最广',
  category: 'uniapp',
  types: ['data-fetching'],
  tags: ['uni-app', 'request', 'http', 'ajax'],

  source: {
    github: 'lei-mu/luch-request',
    npm: 'luch-request',
  },

  links: {
    github: 'https://github.com/lei-mu/luch-request',
    npm: 'https://www.npmjs.com/package/luch-request',
    website: 'https://luch-request.quanzhan.co',
  },

  stats: {
    stars: 668,
    downloads: {
      monthly: 4418,
      weekly: 1009,
    },
  },
})
