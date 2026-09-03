import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@easy-electron/vite-plugin',
  description: 'Vite 插件：自动生成 easy-electron preload 桥接文件和类型声明',
  version: '1.0.1-alpha.1',
  category: 'plugin',
  tags: [
    'electron',
    'easy-electron',
    'vite-plugin',
    'preload',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@easy-electron/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 23,
      weekly: 5,
    },
  },
})
