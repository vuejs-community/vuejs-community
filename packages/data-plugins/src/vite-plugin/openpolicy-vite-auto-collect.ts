import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@openpolicy/vite-auto-collect',
  description: 'Vite plugin that scans source files for @openpolicy/sdk collecting() calls and populates autoCollected() at build time',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'tanstack-intent',
  ],
  links: {
    github: 'https://github.com/jamiedavenport/openpolicy',
    npm: 'https://www.npmjs.com/package/@openpolicy/vite-auto-collect',
    website: 'https://github.com/jamiedavenport/openpolicy#readme',
  },
  source: {
    github: 'jamiedavenport/openpolicy',
    npm: '@openpolicy/vite-auto-collect',
  },
  stats: {
    stars: 163,
    downloads: {
      monthly: 25,
      weekly: 1,
    },
  },
})
