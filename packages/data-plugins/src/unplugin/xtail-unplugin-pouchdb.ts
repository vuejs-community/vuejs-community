import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@xtail/unplugin-pouchdb',
  description: 'XTail 基于 Unplugin 实现的 @xtail/pouchdb API 和类型自动导入',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'pouchdb',
    'xtail',
    'x-tail',
  ],
  source: {
    npm: '@xtail/unplugin-pouchdb',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@xtail/unplugin-pouchdb',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 20,
      weekly: 2,
    },
  },
})
