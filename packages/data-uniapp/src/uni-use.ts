import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'uni-use',
  description: 'uni-helper 出品的 uni-app (Vue3) 组合式工具集，生态内的「VueUse」，含 useStorage / useNetwork 等',
  category: 'uniapp',
  types: ['composable-library'],
  tags: ['uni-app', 'vue3', 'hooks', 'composables'],

  source: {
    github: 'uni-helper/uni-use',
    npm: '@uni-helper/uni-use',
  },

  links: {
    github: 'https://github.com/uni-helper/uni-use',
    npm: 'https://www.npmjs.com/package/@uni-helper/uni-use',
  },

  stats: {
    stars: 181,
    downloads: {
      monthly: 1460,
      weekly: 357,
    },
  },
})
