import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-zig',
  description: 'Import WebAssembly modules compiled from Zig files.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'vite',
    'vite-plugin',
    'wasm',
    'zig',
  ],
  links: {
    github: 'https://github.com/pluvial/vite-plugin-zig',
    npm: 'https://www.npmjs.com/package/vite-plugin-zig',
    website: 'https://github.com/pluvial/vite-plugin-zig#readme',
  },
  source: {
    github: 'pluvial/vite-plugin-zig',
    npm: 'vite-plugin-zig',
  },
  stats: {
    stars: 24,
    downloads: {
      monthly: 11,
      weekly: 1,
    },
  },
})
