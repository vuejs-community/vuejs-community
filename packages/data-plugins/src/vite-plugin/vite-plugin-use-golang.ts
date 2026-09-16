import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-use-golang',
  description: 'Write Go code in JavaScript files. Compiles to WebAssembly. Actually works.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'golang',
    'go',
    'wasm',
    'webassembly',
    'tinygo',
  ],
  source: {
    github: 'yarlson/vite-plugin-use-golang',
    npm: 'vite-plugin-use-golang',
  },
  links: {
    github: 'https://github.com/yarlson/vite-plugin-use-golang',
    npm: 'https://www.npmjs.com/package/vite-plugin-use-golang',
    website: 'https://github.com/yarlson/vite-plugin-use-golang#readme',
  },
  stats: {
    stars: 235,
    downloads: {
      monthly: 22,
      weekly: 4,
    },
  },
})
