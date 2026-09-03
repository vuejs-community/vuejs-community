import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-404-redirect',
  description: '解决 vite 项目单页面 history 路由中 404 页面跳转问题。',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'html',
    '404',
    'redirect',
    'history',
    'router',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/liuxiaojun666/vite-plugin-404-redirect',
    npm: 'https://www.npmjs.com/package/vite-plugin-404-redirect',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 1,
    },
  },
})
