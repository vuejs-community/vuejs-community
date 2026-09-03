import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@botim/mp-debug-sdk',
  description: 'Remote-debug SDK for BOTIM mini-programs — streams console, network, and error events to a BOTIM debug-relay for live inspection, with an AI-observable command channel.',
  version: '1.9.0',
  category: 'plugin',
  tags: [
    'botim',
    'debug',
    'remote-debugging',
    'mini-program',
    'logging',
    'observability',
    'ai-agent',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/botim/mp-debug-sdk',
    npm: 'https://www.npmjs.com/package/@botim/mp-debug-sdk',
  },
  stats: {
    downloads: {
      monthly: 158,
      weekly: 33,
    },
  },
})
