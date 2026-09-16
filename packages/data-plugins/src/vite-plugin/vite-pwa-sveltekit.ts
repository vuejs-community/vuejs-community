import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-pwa-sveltekit',
  description: 'Zero-config PWA for SvelteKit',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'sveltekit',
    'workbox',
    'pwa',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'vite-pwa/sveltekit',
    npm: 'vite-pwa-sveltekit',
  },
  links: {
    github: 'https://github.com/vite-pwa/sveltekit',
    npm: 'https://www.npmjs.com/package/vite-pwa-sveltekit',
    website: 'https://github.com/vite-pwa/sveltekit#readme',
  },
  stats: {
    stars: 416,
    downloads: {
      monthly: 15,
      weekly: 2,
    },
  },
})
