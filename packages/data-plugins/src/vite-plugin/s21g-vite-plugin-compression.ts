import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@s21g/vite-plugin-compression',
  description: 'Use gzip or brotli to compress resources.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'imagemin',
    'vben',
  ],
  links: {
    github: 'https://github.com/anncwb/vite-plugin-compression',
    npm: 'https://www.npmjs.com/package/@s21g/vite-plugin-compression',
    website: 'https://github.com/anncwb/vite-plugin-compression/tree/master/#readme',
  },
  source: {
    github: 'anncwb/vite-plugin-compression',
    npm: '@s21g/vite-plugin-compression',
  },
  stats: {
    stars: 466,
    downloads: {
      monthly: 14,
      weekly: 3,
    },
  },
})
