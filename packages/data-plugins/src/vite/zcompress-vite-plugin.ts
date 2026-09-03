import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'zcompress-vite-plugin',
  description: 'High-performance multi-threaded asset compression for Vite — powered by Zig',
  version: '0.1.6',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/luochuan2008/zcompress',
    npm: 'https://www.npmjs.com/package/zcompress-vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 45,
      weekly: 4,
    },
  },
})
