import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@xtail/unplugin-ssh',
  description: 'XTail 基于 Unplugin 实现的 @xtail/ssh API 和类型自动导入',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'ssh',
    'ssh2',
    'ssh2-promise',
    'xtail',
    'x-tail',
  ],
  source: {
    npm: '@xtail/unplugin-ssh',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@xtail/unplugin-ssh',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 32,
      weekly: 4,
    },
  },
})
