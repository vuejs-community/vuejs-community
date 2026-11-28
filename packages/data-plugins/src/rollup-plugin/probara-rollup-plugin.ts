import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@probara/rollup-plugin',
  description: 'Probara Rollup plugin: gives the emitted JavaScript files a debug ID and the release, and uploads their source maps to Probara error monitoring after the build.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'probara',
    'error-monitoring',
    'source-maps',
    'debug-id',
    'rollup',
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/cynch-me/probara-sdk',
    npm: 'https://www.npmjs.com/package/@probara/rollup-plugin',
    website: 'https://github.com/cynch-me/probara-sdk#readme',
  },
  source: {
    github: 'cynch-me/probara-sdk',
    npm: '@probara/rollup-plugin',
  },
})
