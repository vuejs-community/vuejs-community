import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@niekph/webp-image-generator',
  description: 'A simple CLI tool and Vite plugin to generate WebP images from PNG/JPG files',
  version: '1.3.2',
  category: 'plugin',
  tags: [
    'webp',
    'image',
    'converter',
    'cli',
    'vite-plugin',
    'optimization',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/niek-ph/webp-image-generator',
    npm: 'https://www.npmjs.com/package/@niekph/webp-image-generator',
  },
  stats: {
    downloads: {
      monthly: 30,
      weekly: 8,
    },
  },
})
