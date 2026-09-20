import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@easy-electron/vite-plugin',
  description: 'Vite 插件：自动生成 easy-electron preload 桥接文件和类型声明',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'electron',
    'easy-electron',
    'vite-plugin',
    'preload',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@easy-electron/vite-plugin',
  },
  source: {
    npm: '@easy-electron/vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 36,
      weekly: 11,
    },
  },
})
