import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@resource-fallback/vite-plugin',
  description: 'Vite 4+ plugin that wires @resource-fallback/core into your build (HTML injection + dynamic import rewriting)',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'cdn',
    'fallback',
    'retry',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ben-lau/resource-fallback',
    npm: 'https://www.npmjs.com/package/@resource-fallback/vite-plugin',
    website: 'https://github.com/ben-lau/resource-fallback/tree/main/packages/vite-plugin#readme',
  },
  source: {
    github: 'ben-lau/resource-fallback',
    npm: '@resource-fallback/vite-plugin',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 204,
      weekly: 15,
    },
  },
})
