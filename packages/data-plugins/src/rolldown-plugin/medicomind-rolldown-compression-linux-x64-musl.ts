import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@medicomind/rolldown-compression-linux-x64-musl',
  description: 'Fast native (Rust) gzip / brotli / zstd compression plugin for Rolldown, powered by napi-rs',
  icon: 'logos:rolldown-icon',
  category: 'plugin',
  types: [
    'rolldown-plugin',
  ],
  tags: [
    'rolldown',
    'rolldown-plugin',
    'compression',
    'gzip',
    'brotli',
    'zstd',
    'napi-rs',
  ],
  source: {
    github: 'Medico-Mind/rolldown-compression',
    npm: '@medicomind/rolldown-compression-linux-x64-musl',
  },
  links: {
    github: 'https://github.com/Medico-Mind/rolldown-compression',
    npm: 'https://www.npmjs.com/package/@medicomind/rolldown-compression-linux-x64-musl',
    website: 'https://github.com/Medico-Mind/rolldown-compression#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 715,
      weekly: 61,
    },
  },
})
