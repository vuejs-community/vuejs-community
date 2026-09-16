import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@cssui/unplugin',
  description: '周生生 UI 自动引入插件',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'auto-import',
    'resolver',
  ],
  source: {
    npm: '@cssui/unplugin',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@cssui/unplugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 46,
      weekly: 6,
    },
  },
})
