import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@cprecioso/rollup-plugin-wasm',
  description: 'Rollup polyfill for the WASM ESM proposal',
  version: '1.2.2',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'wasm',
    'esm',
    'polyfill',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/cprecioso/rollup-plugin-wasm',
    npm: 'https://www.npmjs.com/package/@cprecioso/rollup-plugin-wasm',
  },
  stats: {
    downloads: {
      monthly: 22,
      weekly: 4,
    },
  },
})
