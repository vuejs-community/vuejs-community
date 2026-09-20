import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-chunk-cycle-detector',
  description: 'Vite 插件，用于检测 chunk 之间的循环依赖并输出详细依赖路径',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'chunk',
    'cycle',
    'dependency',
  ],
  links: {
    github: 'https://github.com/wqhui/vite-plugin-chunk-cycle-detector',
    npm: 'https://www.npmjs.com/package/vite-plugin-chunk-cycle-detector',
    website: 'https://github.com/wqhui/vite-plugin-chunk-cycle-detector#readme',
  },
  source: {
    github: 'wqhui/vite-plugin-chunk-cycle-detector',
    npm: 'vite-plugin-chunk-cycle-detector',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 71,
      weekly: 11,
    },
  },
})
