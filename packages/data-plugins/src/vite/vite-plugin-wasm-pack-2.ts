import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-wasm-pack-2',
  description: 'Vite plugin for rust using wasm-pack 🦀',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'nshen/vite-plugin-wasm-pack',
    npm: 'vite-plugin-wasm-pack-2',
  },
  links: {
    github: 'https://github.com/nshen/vite-plugin-wasm-pack',
    npm: 'https://www.npmjs.com/package/vite-plugin-wasm-pack-2',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 1,
    },
  },
})
