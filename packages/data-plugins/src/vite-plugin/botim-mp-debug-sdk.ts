import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@botim/mp-debug-sdk',
  description: 'Remote-debug SDK for BOTIM mini-programs — streams console, network, and error events to a BOTIM debug-relay for live inspection, with an AI-observable command channel.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/botim/mp-debug-sdk',
    npm: 'https://www.npmjs.com/package/@botim/mp-debug-sdk',
    website: 'https://github.com/botim/mp-debug-sdk#readme',
  },
  source: {
    github: 'botim/mp-debug-sdk',
    npm: '@botim/mp-debug-sdk',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 100,
      weekly: 12,
    },
  },
})
