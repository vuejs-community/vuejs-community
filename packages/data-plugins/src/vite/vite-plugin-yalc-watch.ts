import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-yalc-watch',
  description: '监听 yalc add 之后包的变化，自动重启 vite dev server',
  icon: 'logos:vite-icon',
  version: '0.0.4',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'yalc',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'Zhaoyi-Flyhigher/vite-plugin-yalc-watch',
    npm: 'vite-plugin-yalc-watch',
  },
  links: {
    github: 'https://github.com/Zhaoyi-Flyhigher/vite-plugin-yalc-watch',
    npm: 'https://www.npmjs.com/package/vite-plugin-yalc-watch',
  },
  stats: {
    downloads: {
      monthly: 140,
      weekly: 15,
    },
  },
})
