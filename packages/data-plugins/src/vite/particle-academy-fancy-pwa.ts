import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@particle-academy/fancy-pwa',
  description: 'Lean, framework-agnostic, SSR-safe PWA layer for the Fancy UI suite — install prompt, online/offline, a Workbox-free service-worker toolkit, a Vite plugin, and update detection composed on fancy-app-update.',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'react',
    'pwa',
    'service-worker',
    'vite-plugin',
    'offline',
    'install-prompt',
    'ssr',
    'fancy',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Particle-Academy/fancy-pwa',
    npm: 'https://www.npmjs.com/package/@particle-academy/fancy-pwa',
  },
  stats: {
    downloads: {
      monthly: 531,
      weekly: 120,
    },
  },
})
