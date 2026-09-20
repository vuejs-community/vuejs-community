import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-universal',
  description: 'Plugin that introduce advanced configurations for pages, allowing to mix SSG, SPA and SSG+JS pages.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'SSG',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-universal',
    website: 'https://github.com/MrFoxPro/vite-plugin-universal',
  },
  source: {
    npm: 'vite-plugin-universal',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 24,
      weekly: 7,
    },
  },
})
