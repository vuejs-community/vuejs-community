import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-compression-rs',
  description: 'Use gzip or brotli to compress resources.',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'valcosmos/vite-plugin-compression-rs',
    npm: 'vite-plugin-compression-rs',
  },
  links: {
    github: 'https://github.com/valcosmos/vite-plugin-compression-rs',
    npm: 'https://www.npmjs.com/package/vite-plugin-compression-rs',
  },
  stats: {
    downloads: {
      monthly: 19,
      weekly: 3,
    },
  },
})
