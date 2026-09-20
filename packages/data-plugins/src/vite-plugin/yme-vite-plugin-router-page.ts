import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@yme/vite-plugin-router-page',
  description: 'Vite 插件，自动根据页面文件生成页面的路由声明文件',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/minosss/vite-plugins',
    npm: 'https://www.npmjs.com/package/@yme/vite-plugin-router-page',
    website: 'https://github.com/minosss/vite-plugins#readme',
  },
  source: {
    github: 'minosss/vite-plugins',
    npm: '@yme/vite-plugin-router-page',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 16,
      weekly: 3,
    },
  },
})
