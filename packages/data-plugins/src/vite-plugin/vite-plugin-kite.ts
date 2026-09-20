import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-kite',
  description: 'Import .kite files from a Vite project. The compiler is WebAssembly, so nothing is installed.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'kite',
    'webassembly',
    'wasm',
  ],
  links: {
    github: 'https://github.com/channyeintun/kite-lang',
    npm: 'https://www.npmjs.com/package/vite-plugin-kite',
    website: 'https://kite-lang.dev',
  },
  source: {
    github: 'channyeintun/kite-lang',
    npm: 'vite-plugin-kite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 269,
      weekly: 5,
    },
  },
})
