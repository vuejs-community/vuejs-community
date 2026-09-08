import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-strive-molu',
  description: '在strive-molu使用组件时自动导入样式',
  icon: 'icon:dark-unplugin',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'strive-molu',
    'unplugin',
    'vite',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'zhoubaos/unplugin-strive-molu',
    npm: 'unplugin-strive-molu',
  },
  links: {
    github: 'https://github.com/zhoubaos/unplugin-strive-molu',
    npm: 'https://www.npmjs.com/package/unplugin-strive-molu',
  },
  stats: {
    downloads: {
      monthly: 55,
      weekly: 2,
    },
  },
})
