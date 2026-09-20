import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@preact/signals-agent-vite',
  description: 'Vite tooling for preact-signals',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'preact',
    'signals',
    'vite',
    'vite-plugin',
    'debug',
    'agent',
    'llm',
  ],
  links: {
    github: 'https://github.com/preactjs/signals',
    npm: 'https://www.npmjs.com/package/@preact/signals-agent-vite',
    website: 'https://preactjs.com',
  },
  source: {
    github: 'preactjs/signals',
    npm: '@preact/signals-agent-vite',
  },
  stats: {
    stars: 4484,
    downloads: {
      monthly: 97,
      weekly: 24,
    },
  },
})
