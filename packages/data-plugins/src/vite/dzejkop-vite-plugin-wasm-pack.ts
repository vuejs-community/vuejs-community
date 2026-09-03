import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'dzejkop-vite-plugin-wasm-pack',
  description: 'Vite plugin for rust using wasm-pack 🦀',
  version: '0.1.13',
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
    npm: 'https://www.npmjs.com/package/dzejkop-vite-plugin-wasm-pack',
  },
  stats: {
    downloads: {
      monthly: 21,
      weekly: 11,
    },
  },
})
