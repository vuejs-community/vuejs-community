import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-skew-protection',
  description: 'Fix "Failed to fetch dynamically imported module" after deploys. Keeps old chunks alive on any static host and recovers gracefully when they\'re gone.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'chunk-load-error',
    'deploy',
    'dynamic-import',
    'failed-to-fetch-dynamically-imported-module',
    'skew-protection',
    'spa',
    'version-skew',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/manInit/vite-plugin-skew-protection',
    npm: 'https://www.npmjs.com/package/vite-plugin-skew-protection',
    website: 'https://github.com/manInit/vite-plugin-skew-protection#readme',
  },
  source: {
    github: 'manInit/vite-plugin-skew-protection',
    npm: 'vite-plugin-skew-protection',
  },
})
