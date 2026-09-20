import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@magic-spells/vite-plugin-live-reload',
  description: 'Vite dev-server plugin that auto-reloads the browser when an externally-built dist directory changes, and serves CSS raw to bypass Vite\'s stale-cache transform — for libraries whose demo doubles as a static-deployed site.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/magic-spells/vite-plugin-live-reload',
    npm: 'https://www.npmjs.com/package/@magic-spells/vite-plugin-live-reload',
    website: 'https://github.com/magic-spells/vite-plugin-live-reload',
  },
  source: {
    github: 'magic-spells/vite-plugin-live-reload',
    npm: '@magic-spells/vite-plugin-live-reload',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 34,
      weekly: 9,
    },
  },
})
