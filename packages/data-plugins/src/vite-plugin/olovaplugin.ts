import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'olovaplugin',
  description: 'Vite plugin for Olova framework - file-based routing, SSG, SSR, and hydration',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'react',
    'router',
    'ssg',
    'ssr',
    'olova',
  ],
  source: {
    npm: 'olovaplugin',
  },
  links: {
    npm: 'https://www.npmjs.com/package/olovaplugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 47,
      weekly: 6,
    },
  },
})
