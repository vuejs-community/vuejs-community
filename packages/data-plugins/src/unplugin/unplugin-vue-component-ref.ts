import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-vue-component-ref',
  description: '用于获取setup组件ref全部导出',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vue',
    'setup',
    'ref',
  ],
  source: {
    github: 'so11y/unplugin-vue-component-ref',
    npm: 'unplugin-vue-component-ref',
  },
  links: {
    github: 'https://github.com/so11y/unplugin-vue-component-ref',
    npm: 'https://www.npmjs.com/package/unplugin-vue-component-ref',
    website: 'https://github.com/so11y/unplugin-vue-component-ref#readme',
  },
  stats: {
    stars: 11,
    downloads: {
      monthly: 100,
      weekly: 2,
    },
  },
})
