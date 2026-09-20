import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-strive-molu',
  description: '在strive-molu使用组件时自动导入样式',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'strive-molu',
    'unplugin',
    'vite',
  ],
  links: {
    github: 'https://github.com/zhoubaos/unplugin-strive-molu',
    npm: 'https://www.npmjs.com/package/unplugin-strive-molu',
    website: 'https://github.com/zhoubaos/unplugin-strive-molu#readme',
  },
  source: {
    github: 'zhoubaos/unplugin-strive-molu',
    npm: 'unplugin-strive-molu',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 9,
      weekly: 1,
    },
  },
})
