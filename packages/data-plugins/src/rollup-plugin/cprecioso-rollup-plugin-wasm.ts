import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@cprecioso/rollup-plugin-wasm',
  description: 'Rollup polyfill for the WASM ESM proposal',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'wasm',
    'esm',
    'polyfill',
  ],
  source: {
    github: 'cprecioso/rollup-plugin-wasm',
    npm: '@cprecioso/rollup-plugin-wasm',
  },
  links: {
    github: 'https://github.com/cprecioso/rollup-plugin-wasm',
    npm: 'https://www.npmjs.com/package/@cprecioso/rollup-plugin-wasm',
    website: 'https://github.com/cprecioso/rollup-plugin-wasm#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 19,
      weekly: 3,
    },
  },
})
