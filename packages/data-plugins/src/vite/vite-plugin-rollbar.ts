import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-rollbar',
  description: 'A Vite plugin to upload sourcemaps to Rollbar after build.',
  icon: 'logos:vite-icon',
  version: '0.0.14',
  category: 'plugin',
  tags: [
    'vite',
    'plugin',
    'vite-plugin',
    'source',
    'map',
    'sourcemap',
    'sourcemaps',
    'production',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'clinggroup/vite-plugin-rollbar',
    npm: 'vite-plugin-rollbar',
  },
  links: {
    github: 'https://github.com/clinggroup/vite-plugin-rollbar',
    npm: 'https://www.npmjs.com/package/vite-plugin-rollbar',
  },
  stats: {
    downloads: {
      monthly: 18983,
      weekly: 6556,
    },
  },
})
