import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'uv-ui',
  description: '基于 uView2.x 二次开发的多端组件库，兼容 Vue2 + Vue3 与 app / h5 / 小程序全端，支持按需单独导入（已停止更新）',
  category: 'uniapp',
  types: ['ui-library', 'mobile-ui'],
  tags: ['uni-app', 'vue3', 'ui', 'mobile'],

  source: {
    github: 'climblee/uv-ui',
    npm: '@climblee/uv-ui',
  },

  links: {
    github: 'https://github.com/climblee/uv-ui',
    npm: 'https://www.npmjs.com/package/@climblee/uv-ui',
    website: 'https://uvui.cn',
  },

  stats: {
    stars: 1347,
    downloads: {
      monthly: 1303,
      weekly: 311,
    },
  },
})
