import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-omni-compress',
  description: 'Vite plugin to compress image and audio assets at build time using omni-compress',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vite',
    'image-compression',
    'image-optimizer',
    'audio-compression',
    'webp',
    'avif',
    'opus',
    'build-tool',
    'asset-optimization',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/dharanish-v/omni-compress',
    npm: 'https://www.npmjs.com/package/vite-plugin-omni-compress',
  },
  stats: {
    downloads: {
      monthly: 24,
      weekly: 7,
    },
  },
})
