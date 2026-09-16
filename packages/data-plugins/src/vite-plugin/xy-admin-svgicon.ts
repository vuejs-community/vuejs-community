import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@xy-admin/svgicon',
  description: 'Vite 插件：自动扫描 SVG 目录并生成动态导入索引，支持 TypeScript 类型提示',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    npm: '@xy-admin/svgicon',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@xy-admin/svgicon',
    website: 'https://gitee.com/SeaHappy0501/xy-admin/tree/master/packages/svgIcon#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 17,
      weekly: 2,
    },
  },
})
