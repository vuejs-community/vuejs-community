import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@svaio/pwa',
  description: 'Zero-config Progressive Web App plugin for Vite and Sveltekit',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'browser-manifest',
    'manifest',
    'pigeonposse',
    'pp',
    'progressive-web-app',
    'pwa',
    'sv',
    'svelte',
    'sveltekit',
    'toolkit',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/pigeonposse/svaio',
    npm: 'https://www.npmjs.com/package/@svaio/pwa',
    website: 'https://svaio.pigeonposse.com/guide/pwa',
  },
  source: {
    github: 'pigeonposse/svaio',
    npm: '@svaio/pwa',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 58,
      weekly: 5,
    },
  },
})
