import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@omniaura/solid-pulse',
  description: 'Dev-mode pulse for SolidJS apps: flash what really updates (fine-grained computations, component mounts/remounts, DOM mutations, DOM detach/reattach with focus and scroll loss, fetch/WebSocket/SSE lifecycle, Solid Query observers) with an agent-controllab',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'solid',
    'solidjs',
    'devtools',
    'tanstack-query',
    'solid-query',
    'agent',
    'claude-code',
    'codex',
    'flash',
    'rerender',
    'reactivity',
    'suspense',
    'vite-plugin',
  ],
  source: {
    github: 'omniaura/solid-pulse',
    npm: '@omniaura/solid-pulse',
  },
  links: {
    github: 'https://github.com/omniaura/solid-pulse',
    npm: 'https://www.npmjs.com/package/@omniaura/solid-pulse',
    website: 'https://github.com/omniaura/solid-pulse#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
