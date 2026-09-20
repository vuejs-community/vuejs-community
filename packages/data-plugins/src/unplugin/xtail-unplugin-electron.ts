import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@xtail/unplugin-electron',
  description: 'XTail 基于 Unplugin 实现的 @xtail/electron API 和类型自动导入',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'electron',
    'xtail',
    'x-tail',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@xtail/unplugin-electron',
  },
  source: {
    npm: '@xtail/unplugin-electron',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 4,
    },
  },
})
