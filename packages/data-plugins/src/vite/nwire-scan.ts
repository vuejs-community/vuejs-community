import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@nwire/scan',
  description: 'Nwire — system registry scanner. Walks AppDefinition[] manifests and writes the .nwire/ cache (actions, events, actors, projections, queries, routes, event graph). Vite plugin + standalone function.',
  version: '0.16.1',
  category: 'plugin',
  tags: [
    'cache',
    'nwire',
    'registry',
    'scan',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@nwire/scan',
  },
  stats: {
    downloads: {
      monthly: 505,
      weekly: 419,
    },
  },
})
