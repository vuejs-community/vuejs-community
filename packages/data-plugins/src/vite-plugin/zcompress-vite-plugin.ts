import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'zcompress-vite-plugin',
  description: 'High-performance multi-threaded asset compression for Vite — powered by Zig',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'compression',
    'gzip',
    'zstd',
    'brotli',
    'assets',
    'zig',
    'performance',
    'multi-threaded',
  ],
  source: {
    github: 'luochuan2008/zcompress',
    npm: 'zcompress-vite-plugin',
  },
  links: {
    github: 'https://github.com/luochuan2008/zcompress',
    npm: 'https://www.npmjs.com/package/zcompress-vite-plugin',
    website: 'https://github.com/luochuan2008/zcompress#readme',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 39,
      weekly: 5,
    },
  },
})
