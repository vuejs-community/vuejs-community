import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-nie-vue',
  description: '在nie-vue使用组件时自动导入样式',
  version: '0.0.3',
  category: 'plugin',
  tags: [
    'nie-vue',
    'unplugin',
    'vite',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/sca-rab/unplugin-nie-vue',
    npm: 'https://www.npmjs.com/package/unplugin-nie-vue',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 1,
    },
  },
})
