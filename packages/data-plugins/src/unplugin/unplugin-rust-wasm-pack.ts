import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-rust-wasm-pack',
  description: 'Unplugin that runs wasm-pack on virtual Cargo.toml imports for Vite, Rollup, Rolldown, and Webpack',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'rollup',
    'rolldown',
    'webpack',
    'wasm',
    'wasm-pack',
    'rust',
    'webassembly',
    'wasm-bindgen',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/Karolis2011/unplugin-rust-wasm-pack',
    npm: 'https://www.npmjs.com/package/unplugin-rust-wasm-pack',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 1,
    },
  },
})
