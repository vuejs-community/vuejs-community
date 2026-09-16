import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@omniaura/scenario-sim',
  description: 'Deterministic scenario simulator for frontend QA: stateful CRUD routes, seeded RNG, virtual clock, response sequences, faults and overrides, SSE and WebSocket routes with scheduled events and resume, per-run isolation, inspectable event log. Runtime-neutr',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'mock',
    'simulator',
    'scenario',
    'msw',
    'sse',
    'websocket',
    'deterministic',
    'seeded',
    'qa',
    'vite-plugin',
    'solid',
    'tanstack-query',
  ],
  source: {
    github: 'omniaura/scenario-sim',
    npm: '@omniaura/scenario-sim',
  },
  links: {
    github: 'https://github.com/omniaura/scenario-sim',
    npm: 'https://www.npmjs.com/package/@omniaura/scenario-sim',
    website: 'https://github.com/omniaura/scenario-sim#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
