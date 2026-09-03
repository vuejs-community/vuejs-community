import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@magicpixelart/vite',
  description: 'Vite plugin that auto-syncs MagicPixel pixel-art assets into your project — no second terminal required.',
  version: '0.2.1',
  category: 'plugin',
  tags: [
    'magicpixel',
    'vite',
    'vite-plugin',
    'pixel-art',
    'asset-sync',
    'gamedev',
    'sprites',
    'hmr',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/handpoke/magicpixel-vite',
    npm: 'https://www.npmjs.com/package/@magicpixelart/vite',
  },
  stats: {
    downloads: {
      monthly: 201,
      weekly: 185,
    },
  },
})
