import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-worker-plus',
  description: '基于 Web Worker 实现的多线程计算方法，提供了 Rollup， Vite 钩子，可让项目中的 JS 模块多线程运行',
  icon: 'logos:rollupjs',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'Web Worker',
    'Worker',
    'vite-plugin',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'Mr-Fubowen/rollup-plugin-worker',
    npm: 'rollup-plugin-worker-plus',
  },
  links: {
    github: 'https://github.com/Mr-Fubowen/rollup-plugin-worker',
    npm: 'https://www.npmjs.com/package/rollup-plugin-worker-plus',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 5,
    },
  },
})
