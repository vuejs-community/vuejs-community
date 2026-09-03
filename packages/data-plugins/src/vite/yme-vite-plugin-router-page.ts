import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@yme/vite-plugin-router-page',
  description: 'Vite 插件，自动根据页面文件生成页面的路由声明文件',
  version: '2.3.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/minosss/vite-plugins',
    npm: 'https://www.npmjs.com/package/@yme/vite-plugin-router-page',
  },
  stats: {
    downloads: {
      monthly: 22,
      weekly: 5,
    },
  },
})
