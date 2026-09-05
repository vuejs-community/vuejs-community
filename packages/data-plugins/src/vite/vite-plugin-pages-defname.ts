import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-pages-defname',
  description: '定义组件名称, 便于 vue-route + keep-alive 动态更新',
  version: '0.1.2',
  category: 'plugin',
  tags: [
    'defname',
    'vite',
    'vite-plugin',
    'vue',
    'vue-plugin',
    'vue3',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-pages-defname',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 1,
    },
  },
})
