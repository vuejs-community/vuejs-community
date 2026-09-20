import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-compression-sync',
  description: 'Use gzip or brotli to compress resources. Base of vben/vite-plugin-compression@0.5.1 change to sync version',
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
    github: 'https://github.com/hn-failte/vite-plugin-compression',
    npm: 'https://www.npmjs.com/package/vite-plugin-compression-sync',
    website: 'https://github.com/hn-failte/vite-plugin-compression/tree/master/#readme',
  },
  source: {
    github: 'hn-failte/vite-plugin-compression',
    npm: 'vite-plugin-compression-sync',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 9,
      weekly: 0,
    },
  },
})
