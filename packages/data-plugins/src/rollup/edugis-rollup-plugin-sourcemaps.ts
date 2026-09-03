import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@edugis/rollup-plugin-sourcemaps',
  description: 'Rollup plugin for grabbing source maps from sourceMappingURLs',
  version: '0.6.4',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'sourcemap',
    'source-map',
    'sourceMappingURL',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/maxdavidson/rollup-plugin-sourcemaps',
    npm: 'https://www.npmjs.com/package/@edugis/rollup-plugin-sourcemaps',
  },
  stats: {
    downloads: {
      monthly: 23,
      weekly: 13,
    },
  },
})
