import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-nie-vue',
  description: '在nie-vue使用组件时自动导入样式',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'nie-vue',
    'unplugin',
    'vite',
  ],
  links: {
    github: 'https://github.com/sca-rab/unplugin-nie-vue',
    npm: 'https://www.npmjs.com/package/unplugin-nie-vue',
    website: 'https://github.com/sca-rab/unplugin-nie-vue#readme',
  },
  source: {
    github: 'sca-rab/unplugin-nie-vue',
    npm: 'unplugin-nie-vue',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 9,
      weekly: 1,
    },
  },
})
