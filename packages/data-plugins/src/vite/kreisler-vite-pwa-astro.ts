import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@kreisler/vite-pwa-astro',
  description: 'Zero-config PWA for Astro - Fork with Astro v6 support',
  version: '1.2.1',
  category: 'plugin',
  tags: [
    'astro-integration',
    'astro',
    'workbox',
    'pwa',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/itskreisler/vite-pwa-astro',
    npm: 'https://www.npmjs.com/package/@kreisler/vite-pwa-astro',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 4,
    },
  },
})
