import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@visdoc/vite-plugin-visdoc',
  description: '这是visdoc的vite插件，用于将md文件转换为html',
  version: '2.0.0',
  category: 'plugin',
  tags: [
    'visdoc',
    'vite-plugin',
    'md',
    'markdown',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@visdoc/vite-plugin-visdoc',
  },
  stats: {
    downloads: {
      monthly: 22,
      weekly: 5,
    },
  },
})
