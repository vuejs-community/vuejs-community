import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-kite',
  description: 'Import .kite files from a Vite project. The compiler is WebAssembly, so nothing is installed.',
  version: '0.1.9',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'kite',
    'webassembly',
    'wasm',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/channyeintun/kite-lang',
    npm: 'https://www.npmjs.com/package/vite-plugin-kite',
  },
  stats: {
    downloads: {
      monthly: 1237,
      weekly: 19,
    },
  },
})
