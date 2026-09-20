import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-pb2zig',
  description: 'Rollup plugin for creating images filters from Pixel Bender kernels',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'zig',
    'rollup-plugin',
    'image',
    'filter',
    'pixel-bender',
    'pbk',
  ],
  links: {
    github: 'https://github.com/chung-leong/pb2zig',
    npm: 'https://www.npmjs.com/package/rollup-plugin-pb2zig',
    website: 'https://github.com/chung-leong/pb2zig#readme',
  },
  source: {
    github: 'chung-leong/pb2zig',
    npm: 'rollup-plugin-pb2zig',
  },
  stats: {
    stars: 25,
    downloads: {
      monthly: 363,
      weekly: 41,
    },
  },
})
