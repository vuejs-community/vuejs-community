import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@magicpixelart/vite',
  description: 'Vite plugin that auto-syncs MagicPixel pixel-art assets into your project — no second terminal required.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'handpoke/magicpixel-vite',
    npm: '@magicpixelart/vite',
  },
  links: {
    github: 'https://github.com/handpoke/magicpixel-vite',
    npm: 'https://www.npmjs.com/package/@magicpixelart/vite',
    website: 'https://magicpixel.art',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 217,
      weekly: 3,
    },
  },
})
