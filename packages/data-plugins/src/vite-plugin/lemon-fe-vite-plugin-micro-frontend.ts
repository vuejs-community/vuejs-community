import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@lemon-fe/vite-plugin-micro-frontend',
  description: 'Vite 微前端插件集合，包含路由自动生成、模块联邦、qiankun 集成等功能',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'micro-frontend',
    'module-federation',
    'qiankun',
    'routes',
  ],
  source: {
    npm: '@lemon-fe/vite-plugin-micro-frontend',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@lemon-fe/vite-plugin-micro-frontend',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 274,
      weekly: 26,
    },
  },
})
