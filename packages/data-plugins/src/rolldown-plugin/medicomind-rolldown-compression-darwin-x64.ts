import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@medicomind/rolldown-compression-darwin-x64',
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
  links: {
    github: 'https://github.com/Medico-Mind/rolldown-compression',
    npm: 'https://www.npmjs.com/package/@medicomind/rolldown-compression-darwin-x64',
    website: 'https://github.com/Medico-Mind/rolldown-compression#readme',
  },
  source: {
    github: 'Medico-Mind/rolldown-compression',
    npm: '@medicomind/rolldown-compression-darwin-x64',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 749,
      weekly: 79,
    },
  },
})
