import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'dzejkop-vite-plugin-wasm-pack',
  description: 'Vite plugin for rust using wasm-pack 🦀',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'nshen/vite-plugin-wasm-pack',
    npm: 'dzejkop-vite-plugin-wasm-pack',
  },
  links: {
    github: 'https://github.com/nshen/vite-plugin-wasm-pack',
    npm: 'https://www.npmjs.com/package/dzejkop-vite-plugin-wasm-pack',
    website: 'https://github.com/nshen/vite-plugin-wasm-pack#readme',
  },
  stats: {
    stars: 274,
    downloads: {
      monthly: 24,
      weekly: 8,
    },
  },
})
