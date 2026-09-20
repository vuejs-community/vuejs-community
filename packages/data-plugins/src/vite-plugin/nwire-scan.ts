import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@nwire/scan',
  description: 'Nwire — system registry scanner. Walks AppDefinition[] manifests and writes the .nwire/ cache (actions, events, actors, projections, queries, routes, event graph). Vite plugin + standalone function.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'cache',
    'nwire',
    'registry',
    'scan',
    'vite-plugin',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@nwire/scan',
  },
  source: {
    npm: '@nwire/scan',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 557,
      weekly: 17,
    },
  },
})
