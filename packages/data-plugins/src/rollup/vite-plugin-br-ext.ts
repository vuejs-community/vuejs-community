import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-br-ext',
  description: 'vite 插件，用于游览器扩展开发中能够使用 vite + vue3技术栈',
  version: '0.0.16',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'rollup-plugin',
    'manifest V3',
    'chorme extension',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/JingHong0202/vite-plugin-br-ext',
    npm: 'https://www.npmjs.com/package/vite-plugin-br-ext',
  },
  stats: {
    downloads: {
      monthly: 30,
      weekly: 1,
    },
  },
})
