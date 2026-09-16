import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@xtail/unplugin-core',
  description: 'XTail 基于 Unplugin 实现的 @xtail/core API 和类型自动导入',
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
  source: {
    npm: '@xtail/unplugin-core',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@xtail/unplugin-core',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11,
      weekly: 2,
    },
  },
})
