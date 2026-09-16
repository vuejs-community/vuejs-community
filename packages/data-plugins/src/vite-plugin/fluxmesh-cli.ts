import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@fluxmesh/cli',
  description: 'Scaffolding CLI and bundler plugins for Flux Agentic AI web applications',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'flux',
    'fluxmesh',
    'ai-agent',
    'scaffolding',
    'cli',
    'vite-plugin',
  ],
  source: {
    npm: '@fluxmesh/cli',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@fluxmesh/cli',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 638,
      weekly: 39,
    },
  },
})
