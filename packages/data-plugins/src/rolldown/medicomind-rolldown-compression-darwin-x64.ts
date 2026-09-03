import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@medicomind/rolldown-compression-darwin-x64',
  description: 'Fast native (Rust) gzip / brotli / zstd compression plugin for Rolldown, powered by napi-rs',
  version: '2.4.2',
  category: 'plugin',
  tags: [
    'rolldown',
    'rolldown-plugin',
    'compression',
    'gzip',
    'brotli',
    'zstd',
    'napi-rs',
  ],
  types: [
    'rolldown-plugin',
  ],
  links: {
    github: 'https://github.com/Medico-Mind/rolldown-compression',
    npm: 'https://www.npmjs.com/package/@medicomind/rolldown-compression-darwin-x64',
  },
  stats: {
    downloads: {
      monthly: 2271,
      weekly: 44,
    },
  },
})
