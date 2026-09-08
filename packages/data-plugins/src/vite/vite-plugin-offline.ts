import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-offline',
  description: 'Zero-config offline support and update awareness for Vite apps',
  icon: 'logos:vite-icon',
  version: '0.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'offline',
    'offline-first',
    'service-worker',
    'pwa',
    'progressive-web-app',
    'cache',
    'caching',
    'network-first',
    'react',
    'vue',
    'svelte',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'peetzweg/vite-plugin-offline-first',
    npm: 'vite-plugin-offline',
  },
  links: {
    github: 'https://github.com/peetzweg/vite-plugin-offline-first',
    npm: 'https://www.npmjs.com/package/vite-plugin-offline',
  },
  stats: {
    downloads: {
      monthly: 147,
      weekly: 147,
    },
  },
})
