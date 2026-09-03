import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@xtail/unplugin-shell',
  description: 'XTail 基于 Unplugin 实现的 @xtail/shell API 和类型自动导入',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'unplugin',
    'shell',
    'xtail',
    'x-tail',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@xtail/unplugin-shell',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 1,
    },
  },
})
