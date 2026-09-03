import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@s21g/vite-plugin-compression',
  description: 'Use gzip or brotli to compress resources.',
  version: '0.5.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'imagemin',
    'vben',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/anncwb/vite-plugin-compression',
    npm: 'https://www.npmjs.com/package/@s21g/vite-plugin-compression',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 4,
    },
  },
})
