import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-iconify-favicon',
  description: 'Vite 插件：从本地 @iconify-json 图标集提取图标，生成支持深色模式的 SVG favicon',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'favicon',
    'iconify',
    'svg',
    'dark-mode',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/AkagiYui/vite-plugin-iconify-favicon',
    npm: 'https://www.npmjs.com/package/vite-plugin-iconify-favicon',
  },
  stats: {
    downloads: {
      monthly: 191,
      weekly: 5,
    },
  },
})
