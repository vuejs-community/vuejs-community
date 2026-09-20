import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@medicomind/rolldown-compression-wasm32-wasi',
  description: 'Fast native (Rust) gzip / brotli / zstd compression plugin for Rolldown, powered by napi-rs',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/Medico-Mind/rolldown-compression',
    npm: 'https://www.npmjs.com/package/@medicomind/rolldown-compression-wasm32-wasi',
    website: 'https://github.com/Medico-Mind/rolldown-compression#readme',
  },
  source: {
    github: 'Medico-Mind/rolldown-compression',
    npm: '@medicomind/rolldown-compression-wasm32-wasi',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 761,
      weekly: 59,
    },
  },
})
