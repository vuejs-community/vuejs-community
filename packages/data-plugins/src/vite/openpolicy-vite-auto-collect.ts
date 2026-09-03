import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@openpolicy/vite-auto-collect',
  description: 'Vite plugin that scans source files for @openpolicy/sdk collecting() calls and populates autoCollected() at build time',
  version: '0.0.23',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'tanstack-intent',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/jamiedavenport/openpolicy',
    npm: 'https://www.npmjs.com/package/@openpolicy/vite-auto-collect',
  },
  stats: {
    downloads: {
      monthly: 45,
      weekly: 4,
    },
  },
})
