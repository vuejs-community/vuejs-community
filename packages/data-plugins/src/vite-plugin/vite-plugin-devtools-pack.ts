import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-devtools-pack',
  description: 'Vite 插件：把 TanStack Query / Router、Jotai、Solid Devtools 收进 Vite DevTools 的 dock 面板，按需启用，不再各占一个页面悬浮入口',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/AkagiYui/vite-plugin-devtools-pack',
    npm: 'https://www.npmjs.com/package/vite-plugin-devtools-pack',
    website: 'https://github.com/AkagiYui/vite-plugin-devtools-pack',
  },
  source: {
    github: 'AkagiYui/vite-plugin-devtools-pack',
    npm: 'vite-plugin-devtools-pack',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 518,
      weekly: 25,
    },
  },
})
