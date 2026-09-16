import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@niekph/webp-image-generator',
  description: 'A simple CLI tool and Vite plugin to generate WebP images from PNG/JPG files',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'webp',
    'image',
    'converter',
    'cli',
    'vite-plugin',
    'optimization',
  ],
  source: {
    github: 'niek-ph/webp-image-generator',
    npm: '@niekph/webp-image-generator',
  },
  links: {
    github: 'https://github.com/niek-ph/webp-image-generator',
    npm: 'https://www.npmjs.com/package/@niekph/webp-image-generator',
    website: 'https://github.com/niek-ph/webp-image-generator#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 19,
      weekly: 2,
    },
  },
})
