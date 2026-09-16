import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-rust-wasm-pack',
  description: 'Unplugin that runs wasm-pack on virtual Cargo.toml imports for Vite, Rollup, Rolldown, and Webpack',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
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
  source: {
    github: 'Karolis2011/unplugin-rust-wasm-pack',
    npm: 'unplugin-rust-wasm-pack',
  },
  links: {
    github: 'https://github.com/Karolis2011/unplugin-rust-wasm-pack',
    npm: 'https://www.npmjs.com/package/unplugin-rust-wasm-pack',
    website: 'https://github.com/Karolis2011/unplugin-rust-wasm-pack#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 6,
      weekly: 2,
    },
  },
})
