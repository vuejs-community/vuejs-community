import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@nessframework/compression',
  description: 'Gzip and Brotli build assets for Ness.js applications.',
  version: '3.0.0',
  category: 'plugin',
  tags: [
    'ness',
    'nessjs',
    'plugin',
    'compression',
    'gzip',
    'brotli',
    'vite',
    'vite-plugin',
    'rollup',
    'precompress',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/leroyanders/Ness.js',
    npm: 'https://www.npmjs.com/package/@nessframework/compression',
  },
  stats: {
    downloads: {
      monthly: 1565,
      weekly: 115,
    },
  },
})
