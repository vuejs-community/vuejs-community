import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-yalc-watch',
  description: '监听 yalc add 之后包的变化，自动重启 vite dev server',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'yalc',
  ],
  source: {
    github: 'Zhaoyi-Flyhigher/vite-plugin-yalc-watch',
    npm: 'vite-plugin-yalc-watch',
  },
  links: {
    github: 'https://github.com/Zhaoyi-Flyhigher/vite-plugin-yalc-watch',
    npm: 'https://www.npmjs.com/package/vite-plugin-yalc-watch',
    website: 'https://github.com/Zhaoyi-Flyhigher/vite-plugin-yalc-watch#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 147,
      weekly: 56,
    },
  },
})
