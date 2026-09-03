import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-zig',
  description: 'Import WebAssembly modules compiled from Zig files.',
  version: '0.0.13',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'vite',
    'vite-plugin',
    'wasm',
    'zig',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/pluvial/vite-plugin-zig',
    npm: 'https://www.npmjs.com/package/vite-plugin-zig',
  },
  stats: {
    downloads: {
      monthly: 28,
      weekly: 0,
    },
  },
})
