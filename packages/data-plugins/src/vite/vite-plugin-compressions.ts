import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-compressions',
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
    npm: 'https://www.npmjs.com/package/vite-plugin-compressions',
  },
  stats: {
    downloads: {
      monthly: 3,
      weekly: 1,
    },
  },
})
