import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-iconify-favicon',
  description: 'Vite 插件：从本地 @iconify-json 图标集提取图标，生成支持深色模式的 SVG favicon',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'favicon',
    'iconify',
    'svg',
    'dark-mode',
  ],
  links: {
    github: 'https://github.com/AkagiYui/vite-plugin-iconify-favicon',
    npm: 'https://www.npmjs.com/package/vite-plugin-iconify-favicon',
    website: 'https://github.com/AkagiYui/vite-plugin-iconify-favicon',
  },
  source: {
    github: 'AkagiYui/vite-plugin-iconify-favicon',
    npm: 'vite-plugin-iconify-favicon',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 27,
      weekly: 1,
    },
  },
})
