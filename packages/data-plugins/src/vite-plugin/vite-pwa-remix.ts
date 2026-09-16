import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vite-pwa/remix',
  description: 'Zero-config PWA for Remix',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'remix-preset',
    'remix',
    'workbox',
    'pwa',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'vite-pwa/remix',
    npm: '@vite-pwa/remix',
  },
  links: {
    github: 'https://github.com/vite-pwa/remix',
    npm: 'https://www.npmjs.com/package/@vite-pwa/remix',
    website: 'https://github.com/vite-pwa/remix#readme',
  },
  stats: {
    stars: 71,
    downloads: {
      monthly: 20890,
      weekly: 4694,
    },
  },
})
