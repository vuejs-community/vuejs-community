import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@agentnext/vite',
  description: 'Vite plugin for AgentNext — auto-bootstrap, inspector, and build-time validation',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'agentnext',
    'vite',
    'vite-plugin',
    'ai-agent',
  ],
  links: {
    github: 'https://github.com/your-org/agentnext',
    npm: 'https://www.npmjs.com/package/@agentnext/vite',
    website: 'https://github.com/your-org/agentnext#readme',
  },
  source: {
    github: 'your-org/agentnext',
    npm: '@agentnext/vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 421,
      weekly: 17,
    },
  },
})
