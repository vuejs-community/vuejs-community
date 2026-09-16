import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rollup/plugin-wasm',
  description: 'Import WebAssembly code with Rollup',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'plugin',
    'webassembly',
    'import',
    'wasm',
    'wast',
    'wat',
    'emscripten',
  ],
  source: {
    github: 'rollup/plugins',
    npm: '@rollup/plugin-wasm',
  },
  links: {
    github: 'https://github.com/rollup/plugins',
    npm: 'https://www.npmjs.com/package/@rollup/plugin-wasm',
    website: 'https://github.com/rollup/plugins/tree/master/packages/wasm/#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 542096,
      weekly: 117267,
    },
  },
})
