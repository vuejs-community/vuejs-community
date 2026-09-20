import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-aseprite-live-sync',
  description: 'Vite plugin that watches Aseprite files and auto-exports PNG/JSON via Aseprite CLI during development.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'aseprite',
    'phaser',
    'asset-pipeline',
    'gamedev',
    'spritesheet',
    'pixel-art',
    'hmr',
    'hot-reload',
    'ase',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-aseprite-live-sync',
  },
  source: {
    npm: 'vite-plugin-aseprite-live-sync',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 24,
      weekly: 2,
    },
  },
})
