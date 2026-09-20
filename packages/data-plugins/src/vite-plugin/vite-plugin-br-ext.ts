import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-br-ext',
  description: 'vite 插件，用于游览器扩展开发中能够使用 vite + vue3技术栈',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'rollup-plugin',
    'manifest V3',
    'chorme extension',
  ],
  links: {
    github: 'https://github.com/JingHong0202/vite-plugin-br-ext',
    npm: 'https://www.npmjs.com/package/vite-plugin-br-ext',
    website: 'https://github.com/JingHong0202/vite-plugin-br-ext#readme',
  },
  source: {
    github: 'JingHong0202/vite-plugin-br-ext',
    npm: 'vite-plugin-br-ext',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 52,
      weekly: 40,
    },
  },
})
