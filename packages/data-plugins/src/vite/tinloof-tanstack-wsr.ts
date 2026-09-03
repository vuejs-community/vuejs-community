import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@tinloof/tanstack-wsr',
  description: 'Worker-Side Rendering (WSR) for TanStack Start: render selected routes inside a service worker — instant, offline, zero-flash document loads.',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vite',
    'tanstack',
    'tanstack-start',
    'tanstack-router',
    'service-worker',
    'wsr',
    'ssr',
    'offline',
    'pwa',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/tinloof/tanstack-wsr',
    npm: 'https://www.npmjs.com/package/@tinloof/tanstack-wsr',
  },
  stats: {
    downloads: {
      monthly: 386,
      weekly: 116,
    },
  },
})
