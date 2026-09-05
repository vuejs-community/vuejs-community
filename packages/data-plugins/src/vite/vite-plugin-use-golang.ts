import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-use-golang',
  description: 'Write Go code in JavaScript files. Compiles to WebAssembly. Actually works.',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'golang',
    'go',
    'wasm',
    'webassembly',
    'tinygo',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/yarlson/vite-plugin-use-golang',
    npm: 'https://www.npmjs.com/package/vite-plugin-use-golang',
  },
  stats: {
    downloads: {
      monthly: 17,
      weekly: 9,
    },
  },
})
