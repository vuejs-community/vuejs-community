import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@wasm-tool/rollup-plugin-rust',
  description: 'Rollup plugin for bundling and importing Rust crates.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'rollup-plugin',
    'vite-plugin',
    'rust-wasm',
    'wasm',
    'rust',
    'rollup',
    'plugin',
    'webassembly',
    'wasm-bindgen',
    'wasm-pack',
  ],
  source: {
    github: 'wasm-tool/rollup-plugin-rust',
    npm: '@wasm-tool/rollup-plugin-rust',
  },
  links: {
    github: 'https://github.com/wasm-tool/rollup-plugin-rust',
    npm: 'https://www.npmjs.com/package/@wasm-tool/rollup-plugin-rust',
    website: 'https://github.com/wasm-tool/rollup-plugin-rust#readme',
  },
  stats: {
    stars: 224,
    downloads: {
      monthly: 3528,
      weekly: 542,
    },
  },
})
