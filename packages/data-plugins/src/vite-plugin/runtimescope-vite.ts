import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@runtimescope/vite',
  description: 'Vite plugin for RuntimeScope — auto-inject the SDK, read DSN from env, skip in production builds without a DSN',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'runtime',
    'profiler',
    'telemetry',
    'observability',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@runtimescope/vite',
  },
  source: {
    npm: '@runtimescope/vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 56,
      weekly: 29,
    },
  },
})
