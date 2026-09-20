import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-compression-rs',
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
  ],
  links: {
    github: 'https://github.com/valcosmos/vite-plugin-compression-rs',
    npm: 'https://www.npmjs.com/package/vite-plugin-compression-rs',
    website: 'https://github.com/valcosmos/vite-plugin-compression-rs/tree/master/#readme',
  },
  source: {
    github: 'valcosmos/vite-plugin-compression-rs',
    npm: 'vite-plugin-compression-rs',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 3,
    },
  },
})
