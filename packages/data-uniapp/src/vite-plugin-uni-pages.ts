import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-uni-pages',
  description: 'uni-helper 出品的 Vite 插件，为 uni-app 提供基于文件系统的路由',
  category: 'uniapp',
  types: ['vite-plugin'],
  tags: ['uni-app', 'vue3', 'vite', 'router', 'file-based-routing'],

  source: {
    github: 'uni-helper/vite-plugin-uni-pages',
    npm: '@uni-helper/vite-plugin-uni-pages',
  },

  links: {
    github: 'https://github.com/uni-helper/vite-plugin-uni-pages',
    npm: 'https://www.npmjs.com/package/@uni-helper/vite-plugin-uni-pages',
  },

  stats: {
    stars: 207,
    downloads: {
      monthly: 11592,
      weekly: 2633,
    },
  },
})
