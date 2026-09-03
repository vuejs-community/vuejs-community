import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@xtail/unplugin-node',
  description: 'XTail 基于 Unplugin 实现的 @xtail/node API 和类型自动导入',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'unplugin',
    'node',
    'xtail',
    'x-tail',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@xtail/unplugin-node',
  },
  stats: {
    downloads: {
      monthly: 6,
      weekly: 1,
    },
  },
})
