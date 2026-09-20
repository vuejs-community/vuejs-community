import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@openpolicy/vite',
  description: 'Vite plugin that scans source files for @openpolicy/sdk collecting()/thirdParty() calls and populates the auto-collected registry at build time',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'openpolicy',
    'privacy-policy',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/jamiedavenport/openpolicy',
    npm: 'https://www.npmjs.com/package/@openpolicy/vite',
    website: 'https://github.com/jamiedavenport/openpolicy#readme',
  },
  source: {
    github: 'jamiedavenport/openpolicy',
    npm: '@openpolicy/vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 291,
      weekly: 65,
    },
  },
})
