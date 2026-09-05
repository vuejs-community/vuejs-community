import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-mira',
  description: 'A custom Vite plugin for SSR + Islands architecture',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'ssr',
    'islands',
    'react',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-mira',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 1,
    },
  },
})
