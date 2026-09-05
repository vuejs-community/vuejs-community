import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-wasm-esm',
  description: 'ESM integration of wasm-pack generated modules with SSR support',
  version: '1.0.3',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/omnysecurity/vite-plugin-wasm-esm',
    npm: 'https://www.npmjs.com/package/vite-plugin-wasm-esm',
  },
  stats: {
    downloads: {
      monthly: 362,
      weekly: 30,
    },
  },
})
