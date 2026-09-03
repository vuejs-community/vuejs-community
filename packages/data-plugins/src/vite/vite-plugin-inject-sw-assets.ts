import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-inject-sw-assets',
  description: 'A Vite plugin that injects static assets into a custom service worker for use with injectManifest (ideal for Workbox + vite-plugin-pwa setups).',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'vite6',
    'plugin',
    'pwa',
    'service-worker',
    'injectManifest',
    'workbox',
    'precache',
    'static-assets',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Effeilo/vite-plugin-inject-sw-assets',
    npm: 'https://www.npmjs.com/package/vite-plugin-inject-sw-assets',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 4,
    },
  },
})
