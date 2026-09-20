import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@visdoc/vite-plugin-visdoc',
  description: '这是visdoc的vite插件，用于将md文件转换为html',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'visdoc',
    'vite-plugin',
    'md',
    'markdown',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@visdoc/vite-plugin-visdoc',
  },
  source: {
    npm: '@visdoc/vite-plugin-visdoc',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 45,
      weekly: 18,
    },
  },
})
