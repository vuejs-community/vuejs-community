import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-uni-components',
  description: 'uni-helper 出品的 Vite 插件，适用于 uni-app 的组件按需自动引入',
  category: 'uniapp',
  types: ['vite-plugin'],
  tags: ['uni-app', 'vue3', 'vite', 'auto-import'],

  source: {
    github: 'uni-helper/vite-plugin-uni-components',
    npm: '@uni-helper/vite-plugin-uni-components',
  },

  links: {
    github: 'https://github.com/uni-helper/vite-plugin-uni-components',
    npm: 'https://www.npmjs.com/package/@uni-helper/vite-plugin-uni-components',
  },

  stats: {
    stars: 44,
    downloads: {
      monthly: 9379,
      weekly: 2040,
    },
  },
})
