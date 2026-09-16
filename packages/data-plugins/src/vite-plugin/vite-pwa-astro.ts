import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vite-pwa/astro',
  description: 'Zero-config PWA for Astro',
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
    github: 'vite-pwa/astro',
    npm: '@vite-pwa/astro',
  },
  links: {
    github: 'https://github.com/vite-pwa/astro',
    npm: 'https://www.npmjs.com/package/@vite-pwa/astro',
    website: 'https://github.com/vite-pwa/astro#readme',
  },
  stats: {
    stars: 320,
    downloads: {
      monthly: 79929,
      weekly: 16800,
    },
  },
})
