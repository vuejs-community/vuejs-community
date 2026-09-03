import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@openpolicy/vite',
  description: 'Vite plugin that scans source files for @openpolicy/sdk collecting()/thirdParty() calls and populates the auto-collected registry at build time',
  version: '0.0.34',
  category: 'plugin',
  tags: [
    'openpolicy',
    'privacy-policy',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/jamiedavenport/openpolicy',
    npm: 'https://www.npmjs.com/package/@openpolicy/vite',
  },
  stats: {
    downloads: {
      monthly: 294,
      weekly: 46,
    },
  },
})
