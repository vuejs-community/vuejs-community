import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-warmup',
  description: 'Warm up Vite\'s transform cache',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'warmup',
  ],
  links: {
    github: 'https://github.com/bluwy/vite-plugin-warmup',
    npm: 'https://www.npmjs.com/package/vite-plugin-warmup',
    website: 'https://github.com/bluwy/vite-plugin-warmup#readme',
  },
  source: {
    github: 'bluwy/vite-plugin-warmup',
    npm: 'vite-plugin-warmup',
  },
  stats: {
    stars: 216,
    downloads: {
      monthly: 2533,
      weekly: 487,
    },
  },
})
