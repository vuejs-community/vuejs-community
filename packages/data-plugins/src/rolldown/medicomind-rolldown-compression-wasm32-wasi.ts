import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@medicomind/rolldown-compression-wasm32-wasi',
  description: 'Fast native (Rust) gzip / brotli / zstd compression plugin for Rolldown, powered by napi-rs',
  version: '2.4.2',
  category: 'plugin',
  tags: [
    'rolldown',
    'rolldown-plugin',
    'vite',
    'vite-plugin',
    'compression',
    'compress',
    'gzip',
    'brotli',
    'zstd',
    'zstandard',
    'rust',
    'native',
    'napi-rs',
    'performance',
  ],
  types: [
    'rolldown-plugin',
  ],
  links: {
    github: 'https://github.com/Medico-Mind/rolldown-compression',
    npm: 'https://www.npmjs.com/package/@medicomind/rolldown-compression-wasm32-wasi',
  },
  stats: {
    downloads: {
      monthly: 2249,
      weekly: 62,
    },
  },
})
