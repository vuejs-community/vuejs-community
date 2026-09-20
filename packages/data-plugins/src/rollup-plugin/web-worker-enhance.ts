import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'web-worker-enhance',
  description: '基于 Web Worker 实现的后台计算方法，提供了 Vite 钩子，可让 Vite 项目中的 JS 模块多线程运行',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'Vite',
    'Web Worker',
    'rollup-plugin',
    'Vite-plugin',
  ],
  links: {
    github: 'https://github.com/Mr-Fubowen/web-worker-plus',
    npm: 'https://www.npmjs.com/package/web-worker-enhance',
    website: 'https://github.com/Mr-Fubowen/web-worker-plus#readme',
  },
  source: {
    github: 'Mr-Fubowen/web-worker-plus',
    npm: 'web-worker-enhance',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 28,
      weekly: 2,
    },
  },
})
