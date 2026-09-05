import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-compression-rs',
  description: 'Use gzip or brotli to compress resources.',
  version: '0.0.5',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'imagemin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/valcosmos/vite-plugin-compression-rs',
    npm: 'https://www.npmjs.com/package/vite-plugin-compression-rs',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 2,
    },
  },
})
