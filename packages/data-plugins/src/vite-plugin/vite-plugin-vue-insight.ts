import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-insight',
  description: '点击定位源码、高亮 DOM、查看组件状态、分享链接 — Vue 3 + Vite 调试助手',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vue',
    'inspector',
    'debug',
    'devtools',
    'source-location',
    'component-state',
  ],
  links: {
    github: 'https://github.com/bingquan040601/vite-plugin-vue-insight',
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-insight',
    website: 'https://github.com/bingquan040601/vite-plugin-vue-insight#readme',
  },
  source: {
    github: 'bingquan040601/vite-plugin-vue-insight',
    npm: 'vite-plugin-vue-insight',
  },
  stats: {
    stars: 7,
    downloads: {
      monthly: 29,
      weekly: 4,
    },
  },
})
