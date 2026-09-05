import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-wasm-go',
  description: 'vite plugin for go compile wasm',
  version: '1.1.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'wasm-go',
    'go-wasm',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/m-Ryan/vite-plugin-wasm-go',
    npm: 'https://www.npmjs.com/package/vite-plugin-wasm-go',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 4,
    },
  },
})
