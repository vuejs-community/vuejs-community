import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'uview-ui',
  description: 'uView 2.0，老牌 uni-app 生态框架，全面兼容 nvue；主要沉淀在 Vue2 项目，Vue3 项目建议使用 uview-plus',
  category: 'uniapp',
  types: ['ui-library', 'mobile-ui'],
  tags: ['uni-app', 'ui', 'mobile', 'nvue'],

  source: {
    github: 'umicro/uView2.0',
    npm: 'uview-ui',
  },

  links: {
    github: 'https://github.com/umicro/uView2.0',
    npm: 'https://www.npmjs.com/package/uview-ui',
    website: 'https://uviewui.com',
  },

  stats: {
    stars: 1786,
    downloads: {
      monthly: 31073,
      weekly: 4808,
    },
  },
})
