import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-pages-defname',
  description: '定义组件名称, 便于 vue-route + keep-alive 动态更新',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'defname',
    'vite',
    'vite-plugin',
    'vue',
    'vue-plugin',
    'vue3',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-pages-defname',
    website: 'https://github.com/ban-jobs/vite-plugin-pages-defname',
  },
  source: {
    npm: 'vite-plugin-pages-defname',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 17,
      weekly: 3,
    },
  },
})
