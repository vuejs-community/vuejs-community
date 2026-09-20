import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-inject-sw-assets',
  description: 'A Vite plugin that injects static assets into a custom service worker for use with injectManifest (ideal for Workbox + vite-plugin-pwa setups).',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/Effeilo/vite-plugin-inject-sw-assets',
    npm: 'https://www.npmjs.com/package/vite-plugin-inject-sw-assets',
    website: 'https://github.com/Effeilo/vite-plugin-inject-sw-assets',
  },
  source: {
    github: 'Effeilo/vite-plugin-inject-sw-assets',
    npm: 'vite-plugin-inject-sw-assets',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 31,
      weekly: 10,
    },
  },
})
