import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@xtail/unplugin-ui',
  description: 'XTail 基于 Unplugin 实现的 @xtail/ui API 和类型自动导入',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'ui',
    'xtail',
    'x-tail',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@xtail/unplugin-ui',
  },
  source: {
    npm: '@xtail/unplugin-ui',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 3,
    },
  },
})
