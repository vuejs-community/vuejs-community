import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@probara/vite-plugin',
  description: 'Probara Vite plugin: gives the emitted JavaScript files a debug ID and the release, and uploads their source maps to Probara error monitoring after the build.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'probara',
    'error-monitoring',
    'source-maps',
    'debug-id',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/cynch-me/probara-sdk',
    npm: 'https://www.npmjs.com/package/@probara/vite-plugin',
    website: 'https://github.com/cynch-me/probara-sdk#readme',
  },
  source: {
    github: 'cynch-me/probara-sdk',
    npm: '@probara/vite-plugin',
  },
})
