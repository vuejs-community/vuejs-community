import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-compression-sync',
  description: 'Use gzip or brotli to compress resources. Base of vben/vite-plugin-compression@0.5.1 change to sync version',
  version: '0.5.2',
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
    github: 'https://github.com/hn-failte/vite-plugin-compression',
    npm: 'https://www.npmjs.com/package/vite-plugin-compression-sync',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 0,
    },
  },
})
