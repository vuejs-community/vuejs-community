import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-pb2zig',
  description: 'Rollup plugin for creating images filters from Pixel Bender kernels',
  version: '0.15.2',
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
  links: {
    github: 'https://github.com/chung-leong/pb2zig',
    npm: 'https://www.npmjs.com/package/rollup-plugin-pb2zig',
  },
  stats: {
    downloads: {
      monthly: 868,
      weekly: 17,
    },
  },
})
