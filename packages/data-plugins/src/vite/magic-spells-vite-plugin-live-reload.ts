import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@magic-spells/vite-plugin-live-reload',
  description: 'Vite dev-server plugin that auto-reloads the browser when an externally-built dist directory changes, and serves CSS raw to bypass Vite\'s stale-cache transform — for libraries whose demo doubles as a static-deployed site.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'live-reload',
    'hot-reload',
    'library',
    'web-components',
    'dev-server',
    'watch',
    'dist',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/magic-spells/vite-plugin-live-reload',
    npm: 'https://www.npmjs.com/package/@magic-spells/vite-plugin-live-reload',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 10,
    },
  },
})
