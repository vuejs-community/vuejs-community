import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@codeserk/forge-stats-vite',
  description: 'Vite plugin for Forge Stats. Uploads the source maps of the build, so errors show the original code.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'forge',
    'stats',
    'error-tracking',
    'source-maps',
    'vite',
    'vite-plugin',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@codeserk/forge-stats-vite',
  },
  source: {
    npm: '@codeserk/forge-stats-vite',
  },
})
