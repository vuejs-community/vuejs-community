import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'libredwg-vite-ts',
  description: 'Vite plugin for libredwg-ts - handles WASM file serving automatically',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'dwg',
    'autocad',
    'cad',
    'libredwg',
    'wasm',
    'webassembly',
  ],
  source: {
    npm: 'libredwg-vite-ts',
  },
  links: {
    npm: 'https://www.npmjs.com/package/libredwg-vite-ts',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 31,
      weekly: 2,
    },
  },
})
