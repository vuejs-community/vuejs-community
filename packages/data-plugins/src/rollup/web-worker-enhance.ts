import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'web-worker-enhance',
  description: '基于 Web Worker 实现的后台计算方法，提供了 Vite 钩子，可让 Vite 项目中的 JS 模块多线程运行',
  version: '1.2.3',
  category: 'plugin',
  tags: [
    'Vite',
    'Web Worker',
    'rollup-plugin',
    'Vite-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/Mr-Fubowen/web-worker-plus',
    npm: 'https://www.npmjs.com/package/web-worker-enhance',
  },
  stats: {
    downloads: {
      monthly: 76,
      weekly: 6,
    },
  },
})
