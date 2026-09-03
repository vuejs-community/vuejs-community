import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@runtimescope/vite',
  description: 'Vite plugin for RuntimeScope — auto-inject the SDK, read DSN from env, skip in production builds without a DSN',
  version: '0.12.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'runtime',
    'profiler',
    'telemetry',
    'observability',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@runtimescope/vite',
  },
  stats: {
    downloads: {
      monthly: 78,
      weekly: 5,
    },
  },
})
