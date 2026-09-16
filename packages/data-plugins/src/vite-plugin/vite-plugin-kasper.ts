import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-kasper',
  description: 'Vite plugin for Kasper.js single-file components',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'kasper',
    'kasper-js',
    'sfc',
  ],
  source: {
    npm: 'vite-plugin-kasper',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-kasper',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 8,
      weekly: 1,
    },
  },
})
