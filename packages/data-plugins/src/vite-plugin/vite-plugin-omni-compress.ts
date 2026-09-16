import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-omni-compress',
  description: 'Vite plugin to compress image and audio assets at build time using omni-compress',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'dharanish-v/omni-compress',
    npm: 'vite-plugin-omni-compress',
  },
  links: {
    github: 'https://github.com/dharanish-v/omni-compress',
    npm: 'https://www.npmjs.com/package/vite-plugin-omni-compress',
    website: 'https://github.com/dharanish-v/omni-compress/tree/master/packages/vite-plugin-omni-compress#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 28,
      weekly: 7,
    },
  },
})
