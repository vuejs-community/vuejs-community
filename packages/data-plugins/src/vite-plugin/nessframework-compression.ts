import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@nessframework/compression',
  description: 'Gzip and Brotli build assets for Ness.js applications.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'leroyanders/Ness.js',
    npm: '@nessframework/compression',
  },
  links: {
    github: 'https://github.com/leroyanders/Ness.js',
    npm: 'https://www.npmjs.com/package/@nessframework/compression',
    website: 'https://nessjs.com/docs/plugins/compression',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 625,
      weekly: 8,
    },
  },
})
