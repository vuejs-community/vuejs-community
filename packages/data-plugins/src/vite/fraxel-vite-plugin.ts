import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@fraxel/vite-plugin',
  description: 'Official Vite plugin for Fraxel.',
  version: '0.1.0-alpha.6',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/sanchedev/fraxel',
    npm: 'https://www.npmjs.com/package/@fraxel/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 255,
      weekly: 18,
    },
  },
})
