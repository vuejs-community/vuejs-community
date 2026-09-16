import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-import-icons',
  description: '用于引入 SVG 图标的 Vite 插件，支持自动引入和热更新。',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'icons',
  ],
  source: {
    github: 'CDTRSFE/vite-plugin-import-icons',
    npm: 'vite-plugin-import-icons',
  },
  links: {
    github: 'https://github.com/CDTRSFE/vite-plugin-import-icons',
    npm: 'https://www.npmjs.com/package/vite-plugin-import-icons',
    website: 'https://github.com/CDTRSFE/vite-plugin-import-icons',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 21,
      weekly: 2,
    },
  },
})
