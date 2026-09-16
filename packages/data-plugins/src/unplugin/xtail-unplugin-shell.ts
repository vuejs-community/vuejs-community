import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@xtail/unplugin-shell',
  description: 'XTail 基于 Unplugin 实现的 @xtail/shell API 和类型自动导入',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'shell',
    'xtail',
    'x-tail',
  ],
  source: {
    npm: '@xtail/unplugin-shell',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@xtail/unplugin-shell',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 2,
    },
  },
})
