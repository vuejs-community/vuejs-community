import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@xtail/unplugin-result',
  description: 'XTail 基于 Unplugin 实现的 @xtail/result API 和类型自动导入',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'core',
    'xtail',
    'x-tail',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@xtail/unplugin-result',
  },
  source: {
    npm: '@xtail/unplugin-result',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 2,
    },
  },
})
