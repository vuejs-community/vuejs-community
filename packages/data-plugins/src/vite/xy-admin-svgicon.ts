import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@xy-admin/svgicon',
  description: 'Vite 插件：自动扫描 SVG 目录并生成动态导入索引，支持 TypeScript 类型提示',
  version: '2.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'svg',
    'svg-icon',
    'svg-import',
    'typescript',
    'icon-system',
    'auto-import',
    'dynamic-import',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@xy-admin/svgicon',
  },
  stats: {
    downloads: {
      monthly: 18,
      weekly: 9,
    },
  },
})
