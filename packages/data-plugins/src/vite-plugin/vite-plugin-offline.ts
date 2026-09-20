import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-offline',
  description: 'Zero-config offline support and update awareness for Vite apps',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/peetzweg/vite-plugin-offline-first',
    npm: 'https://www.npmjs.com/package/vite-plugin-offline',
    website: 'https://github.com/peetzweg/vite-plugin-offline-first#readme',
  },
  source: {
    github: 'peetzweg/vite-plugin-offline-first',
    npm: 'vite-plugin-offline',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 166,
      weekly: 3,
    },
  },
})
