import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-miniprogram-tree-shaking',
  description: '用于跨平台小程序框架使用原生小程序组件库时的tree-shaking',
  icon: 'logos:vite-icon',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'miniprogram',
    'vite-plugin',
    'tree-shaking',
    'uniapp',
    'taro',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'Lgowen/vite-plugin-miniprogram-tree-shaking',
    npm: 'vite-plugin-miniprogram-tree-shaking',
  },
  links: {
    github: 'https://github.com/Lgowen/vite-plugin-miniprogram-tree-shaking',
    npm: 'https://www.npmjs.com/package/vite-plugin-miniprogram-tree-shaking',
  },
  stats: {
    downloads: {
      monthly: 6,
      weekly: 1,
    },
  },
})
