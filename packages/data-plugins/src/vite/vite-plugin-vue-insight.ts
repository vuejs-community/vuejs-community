import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-insight',
  description: '点击定位源码、高亮 DOM、查看组件状态、分享链接 — Vue 3 + Vite 调试助手',
  version: '0.1.2',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vue',
    'inspector',
    'debug',
    'devtools',
    'source-location',
    'component-state',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/bingquan040601/vite-plugin-vue-insight',
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-insight',
  },
  stats: {
    downloads: {
      monthly: 32,
      weekly: 2,
    },
  },
})
