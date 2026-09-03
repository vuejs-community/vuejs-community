import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@xtail/unplugin-ssh',
  description: 'XTail 基于 Unplugin 实现的 @xtail/ssh API 和类型自动导入',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'unplugin',
    'ssh',
    'ssh2',
    'ssh2-promise',
    'xtail',
    'x-tail',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@xtail/unplugin-ssh',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 8,
    },
  },
})
