import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'create-uni',
  description: 'uni-helper 出品的快速创建 uni-app 项目脚手架',
  category: 'uniapp',
  types: ['devtool'],
  tags: ['uni-app', 'vue3', 'cli', 'scaffold'],

  source: {
    github: 'uni-helper/create-uni',
    npm: 'create-uni',
  },

  links: {
    github: 'https://github.com/uni-helper/create-uni',
    npm: 'https://www.npmjs.com/package/create-uni',
  },

  stats: {
    stars: 305,
    downloads: {
      monthly: 1737,
      weekly: 152,
    },
  },
})
