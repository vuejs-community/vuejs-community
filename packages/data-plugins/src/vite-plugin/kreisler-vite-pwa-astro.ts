import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@kreisler/vite-pwa-astro',
  description: 'Zero-config PWA for Astro - Fork with Astro v6 support',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'astro-integration',
    'astro',
    'workbox',
    'pwa',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'itskreisler/vite-pwa-astro',
    npm: '@kreisler/vite-pwa-astro',
  },
  links: {
    github: 'https://github.com/itskreisler/vite-pwa-astro',
    npm: 'https://www.npmjs.com/package/@kreisler/vite-pwa-astro',
    website: 'https://github.com/itskreisler/vite-pwa-astro#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 2,
    },
  },
})
