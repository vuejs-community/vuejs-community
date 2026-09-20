import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@skybolt/vite-plugin',
  description: 'Vite plugin for Skybolt - High-performance asset caching for multi-page applications',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'skybolt',
    'caching',
    'service-worker',
    'performance',
    'assets',
  ],
  links: {
    github: 'https://github.com/JensRoland/skybolt',
    npm: 'https://www.npmjs.com/package/@skybolt/vite-plugin',
    website: 'https://github.com/JensRoland/skybolt#readme',
  },
  source: {
    github: 'JensRoland/skybolt',
    npm: '@skybolt/vite-plugin',
  },
  stats: {
    stars: 5,
    downloads: {
      monthly: 20,
      weekly: 4,
    },
  },
})
