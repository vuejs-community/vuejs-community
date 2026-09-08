import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-pb2zig',
  description: 'Rollup plugin for creating images filters from Pixel Bender kernels',
  icon: 'logos:rollupjs',
  version: '0.16.0',
  category: 'plugin',
  tags: [
    'zig',
    'rollup-plugin',
    'image',
    'filter',
    'pixel-bender',
    'pbk',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'chung-leong/pb2zig',
    npm: 'rollup-plugin-pb2zig',
  },
  links: {
    github: 'https://github.com/chung-leong/pb2zig',
    npm: 'https://www.npmjs.com/package/rollup-plugin-pb2zig',
  },
  stats: {
    downloads: {
      monthly: 405,
      weekly: 48,
    },
  },
})
