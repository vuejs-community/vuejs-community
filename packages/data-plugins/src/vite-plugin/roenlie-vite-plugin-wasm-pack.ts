import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@roenlie/vite-plugin-wasm-pack',
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
    npm: '@roenlie/vite-plugin-wasm-pack',
  },
  links: {
    github: 'https://github.com/nshen/vite-plugin-wasm-pack',
    npm: 'https://www.npmjs.com/package/@roenlie/vite-plugin-wasm-pack',
    website: 'https://github.com/nshen/vite-plugin-wasm-pack#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 19,
      weekly: 5,
    },
  },
})
