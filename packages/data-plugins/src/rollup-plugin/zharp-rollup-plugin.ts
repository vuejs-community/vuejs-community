import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@zharp/rollup-plugin',
  description: 'Zharp Rollup plugin: inject debug IDs and upload source maps',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'zharp',
    'sourcemaps',
    'debug-id',
    'error-tracking',
    'rollup',
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/zharp-io/zharp-javascript-lib',
    npm: 'https://www.npmjs.com/package/@zharp/rollup-plugin',
    website: 'https://zharp.io/docs/sourcemaps',
  },
  source: {
    github: 'zharp-io/zharp-javascript-lib',
    npm: '@zharp/rollup-plugin',
  },
})
