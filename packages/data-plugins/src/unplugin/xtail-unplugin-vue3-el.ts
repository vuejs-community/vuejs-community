import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@xtail/unplugin-vue3-el',
  description: 'XTail 基于 Unplugin 实现的 @xtail/vue3-el 组件、API 和类型自动导入',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vue3',
    'element-plus',
    'xtail',
    'x-tail',
  ],
  source: {
    npm: '@xtail/unplugin-vue3-el',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@xtail/unplugin-vue3-el',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 2,
    },
  },
})
