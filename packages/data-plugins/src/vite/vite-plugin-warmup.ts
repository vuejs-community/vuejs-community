import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-warmup',
  description: 'Warm up Vite\'s transform cache',
  icon: 'logos:vite-icon',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'warmup',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'bluwy/vite-plugin-warmup',
    npm: 'vite-plugin-warmup',
  },
  links: {
    github: 'https://github.com/bluwy/vite-plugin-warmup',
    npm: 'https://www.npmjs.com/package/vite-plugin-warmup',
  },
  stats: {
    downloads: {
      monthly: 2663,
      weekly: 723,
    },
  },
})
