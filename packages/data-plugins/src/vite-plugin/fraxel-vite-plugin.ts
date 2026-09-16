import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@fraxel/vite-plugin',
  description: 'Official Vite plugin for Fraxel.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'fraxel',
    'vite',
    'vite-plugin',
    'game-engine',
    '2d',
    'canvas',
    'jsx',
    'typescript',
  ],
  source: {
    github: 'sanchedev/fraxel',
    npm: '@fraxel/vite-plugin',
  },
  links: {
    github: 'https://github.com/sanchedev/fraxel',
    npm: 'https://www.npmjs.com/package/@fraxel/vite-plugin',
    website: 'https://github.com/sanchedev/fraxel#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 234,
      weekly: 4,
    },
  },
})
