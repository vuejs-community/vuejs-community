import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@xtail/unplugin-electron',
  description: 'XTail 基于 Unplugin 实现的 @xtail/electron API 和类型自动导入',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'unplugin',
    'electron',
    'xtail',
    'x-tail',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@xtail/unplugin-electron',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 5,
    },
  },
})
