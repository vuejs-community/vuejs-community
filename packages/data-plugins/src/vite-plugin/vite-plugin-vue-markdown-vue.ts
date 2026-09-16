import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-markdown-vue',
  description: '把 markdown 文档导出 vue 组件使用',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'markdown',
  ],
  source: {
    github: 'mackxu/vite-plugin-vue-markdown',
    npm: 'vite-plugin-vue-markdown-vue',
  },
  links: {
    github: 'https://github.com/mackxu/vite-plugin-vue-markdown',
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-markdown-vue',
    website: 'https://github.com/mackxu/vite-plugin-vue-markdown#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 8,
      weekly: 1,
    },
  },
})
