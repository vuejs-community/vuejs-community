import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-rollbar',
  description: 'A Vite plugin to upload sourcemaps to Rollbar after build.',
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
