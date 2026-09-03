import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@lemon-fe/vite-plugin-micro-frontend',
  description: 'Vite 微前端插件集合，包含路由自动生成、模块联邦、qiankun 集成等功能',
  version: '1.2.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'micro-frontend',
    'module-federation',
    'qiankun',
    'routes',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@lemon-fe/vite-plugin-micro-frontend',
  },
  stats: {
    downloads: {
      monthly: 78,
      weekly: 13,
    },
  },
})
