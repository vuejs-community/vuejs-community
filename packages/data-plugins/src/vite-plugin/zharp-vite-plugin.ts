import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@zharp/vite-plugin',
  description: 'Zharp Vite plugin: inject debug IDs and upload source maps on production builds',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'zharp',
    'sourcemaps',
    'debug-id',
    'error-tracking',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/zharp-io/zharp-javascript-lib',
    npm: 'https://www.npmjs.com/package/@zharp/vite-plugin',
    website: 'https://zharp.io/docs/sourcemaps',
  },
  source: {
    github: 'zharp-io/zharp-javascript-lib',
    npm: '@zharp/vite-plugin',
  },
})
