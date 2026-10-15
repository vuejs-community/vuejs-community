import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@kloudmate/sourcemaps',
  description: 'Upload source maps to KloudMate so RUM stack traces show your original code',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'sourcemaps',
    'source-maps',
    'vite-plugin',
    'rollup-plugin',
    'webpack-plugin',
    'rspack-plugin',
    'rum',
    'kloudmate',
  ],
  links: {
    github: 'https://github.com/kloudmate/rum-web',
    npm: 'https://www.npmjs.com/package/@kloudmate/sourcemaps',
    website: 'https://docs.kloudmate.com/rum/instrumentation-guide/',
  },
  source: {
    github: 'kloudmate/rum-web',
    npm: '@kloudmate/sourcemaps',
  },
})
