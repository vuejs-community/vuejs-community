import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-sourcemaps',
  description: 'Rollup plugin for grabbing source maps from sourceMappingURLs',
  icon: 'logos:rollupjs',
  version: '0.6.3',
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
  source: {
    github: 'maxdavidson/rollup-plugin-sourcemaps',
    npm: 'rollup-plugin-sourcemaps',
  },
  links: {
    github: 'https://github.com/maxdavidson/rollup-plugin-sourcemaps',
    npm: 'https://www.npmjs.com/package/rollup-plugin-sourcemaps',
  },
  stats: {
    downloads: {
      monthly: 3261105,
      weekly: 969092,
    },
  },
})
