import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@xtail/unplugin-core',
  description: 'XTail 基于 Unplugin 实现的 @xtail/core API 和类型自动导入',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'unplugin',
    'core',
    'xtail',
    'x-tail',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@xtail/unplugin-core',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 7,
    },
  },
})
