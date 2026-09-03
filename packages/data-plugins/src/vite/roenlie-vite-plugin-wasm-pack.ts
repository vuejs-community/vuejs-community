import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@roenlie/vite-plugin-wasm-pack',
  description: 'Vite plugin for rust using wasm-pack 🦀',
  version: '0.1.11',
  category: 'plugin',
  tags: [
    'wasm-pack',
    'wasm-bindgen',
    'vite-plugin',
    'webassembly',
    'wasm',
    'rust',
    'vite',
    'cargo',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/nshen/vite-plugin-wasm-pack',
    npm: 'https://www.npmjs.com/package/@roenlie/vite-plugin-wasm-pack',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 6,
    },
  },
})
