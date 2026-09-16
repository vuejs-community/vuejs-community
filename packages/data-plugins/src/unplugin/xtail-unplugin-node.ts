import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@xtail/unplugin-node',
  description: 'XTail 基于 Unplugin 实现的 @xtail/node API 和类型自动导入',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'node',
    'xtail',
    'x-tail',
  ],
  source: {
    npm: '@xtail/unplugin-node',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@xtail/unplugin-node',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 2,
    },
  },
})
