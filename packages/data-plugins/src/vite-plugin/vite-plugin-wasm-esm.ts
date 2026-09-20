import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-wasm-esm',
  description: 'ESM integration of wasm-pack generated modules with SSR support',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'plugin',
    'vite-plugin',
    'wasm',
    'webassembly',
    'wasm-pack',
    'esm',
    'es-modules',
    'modules',
  ],
  links: {
    github: 'https://github.com/omnysecurity/vite-plugin-wasm-esm',
    npm: 'https://www.npmjs.com/package/vite-plugin-wasm-esm',
    website: 'https://github.com/omnysecurity/vite-plugin-wasm-esm',
  },
  source: {
    github: 'omnysecurity/vite-plugin-wasm-esm',
    npm: 'vite-plugin-wasm-esm',
  },
  stats: {
    stars: 12,
    downloads: {
      monthly: 117,
      weekly: 10,
    },
  },
})
