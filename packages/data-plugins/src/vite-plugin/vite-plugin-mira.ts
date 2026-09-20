import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-mira',
  description: 'A custom Vite plugin for SSR + Islands architecture',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'ssr',
    'islands',
    'react',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-mira',
  },
  source: {
    npm: 'vite-plugin-mira',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
