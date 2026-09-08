import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-nie-vue',
  description: '在nie-vue使用组件时自动导入样式',
  icon: 'icon:dark-unplugin',
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
  source: {
    github: 'sca-rab/unplugin-nie-vue',
    npm: 'unplugin-nie-vue',
  },
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
