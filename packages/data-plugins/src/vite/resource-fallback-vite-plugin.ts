import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@resource-fallback/vite-plugin',
  description: 'Vite 4+ plugin that wires @resource-fallback/core into your build (HTML injection + dynamic import rewriting)',
  version: '0.3.0',
  category: 'plugin',
  tags: [
    'cdn',
    'fallback',
    'retry',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ben-lau/resource-fallback',
    npm: 'https://www.npmjs.com/package/@resource-fallback/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 53,
      weekly: 7,
    },
  },
})
