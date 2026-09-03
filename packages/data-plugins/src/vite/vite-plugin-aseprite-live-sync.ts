import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-aseprite-live-sync',
  description: 'Vite plugin that watches Aseprite files and auto-exports PNG/JSON via Aseprite CLI during development.',
  version: '0.1.1',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-aseprite-live-sync',
  },
  stats: {
    downloads: {
      monthly: 174,
      weekly: 5,
    },
  },
})
