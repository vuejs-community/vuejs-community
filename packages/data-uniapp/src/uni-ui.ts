import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'uni-ui',
  description: 'DCloud 官方的 uni-app 扩展组件库，全端兼容、高性能，与 uni-app 生态深度集成',
  category: 'uniapp',
  types: ['ui-library', 'mobile-ui'],
  tags: ['uni-app', 'vue3', 'ui', 'mobile', 'official'],

  source: {
    github: 'dcloudio/uni-ui',
    npm: '@dcloudio/uni-ui',
  },

  links: {
    github: 'https://github.com/dcloudio/uni-ui',
    npm: 'https://www.npmjs.com/package/@dcloudio/uni-ui',
  },

  stats: {
    stars: 2093,
    downloads: {
      monthly: 22313,
      weekly: 5973,
    },
  },
})
