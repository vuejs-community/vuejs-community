import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-chunk-cycle-detector',
  description: 'Vite 插件，用于检测 chunk 之间的循环依赖并输出详细依赖路径',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'chunk',
    'cycle',
    'dependency',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/wqhui/vite-plugin-chunk-cycle-detector',
    npm: 'https://www.npmjs.com/package/vite-plugin-chunk-cycle-detector',
  },
  stats: {
    downloads: {
      monthly: 69,
      weekly: 15,
    },
  },
})
