import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@sgysldz/vue-auto-router',
  description: '基于文件系统的 Vue Router 自动路由：扫描 views 目录并生成嵌套路由树',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'auto-router',
    'file-based-routing',
    'vite',
    'vite-plugin',
    'vue',
    'vue-router',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@sgysldz/vue-auto-router',
  },
  stats: {
    downloads: {
      monthly: 19,
      weekly: 4,
    },
  },
})
