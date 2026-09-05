import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'uni-types',
  description: 'uni-helper 出品，为 uni-app、uni-cloud 和 uni-ui 组件提供 TypeScript 类型支持',
  category: 'uniapp',
  types: ['utility-library'],
  tags: ['uni-app', 'vue3', 'typescript', 'types'],

  source: {
    github: 'uni-helper/uni-typed',
    npm: '@uni-helper/uni-types',
  },

  links: {
    github: 'https://github.com/uni-helper/uni-typed',
    npm: 'https://www.npmjs.com/package/@uni-helper/uni-types',
  },

  stats: {
    stars: 86,
    downloads: {
      monthly: 9004,
      weekly: 1943,
    },
  },
})
