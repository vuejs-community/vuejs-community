import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@preact/signals-agent-vite',
  description: 'Vite tooling for preact-signals',
  version: '0.1.3',
  category: 'plugin',
  tags: [
    'preact',
    'signals',
    'vite',
    'vite-plugin',
    'debug',
    'agent',
    'llm',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/preactjs/signals',
    npm: 'https://www.npmjs.com/package/@preact/signals-agent-vite',
  },
  stats: {
    downloads: {
      monthly: 80,
      weekly: 28,
    },
  },
})
