import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-devtools-pack',
  description: 'Vite 插件：把 TanStack Query / Router、Jotai、Solid Devtools 收进 Vite DevTools 的 dock 面板，按需启用，不再各占一个页面悬浮入口',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'vite-devtools',
    'devtools',
    'dock',
    'tanstack',
    'jotai',
    'react',
    'solid',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/AkagiYui/vite-plugin-devtools-pack',
    npm: 'https://www.npmjs.com/package/vite-plugin-devtools-pack',
  },
  stats: {
    downloads: {
      monthly: 467,
      weekly: 467,
    },
  },
})
