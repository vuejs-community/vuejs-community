import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-include-sourcemaps',
  description: 'Rollup plugin for grabbing source maps from sourceMappingURLs',
  icon: 'logos:rollupjs',
  version: '0.7.0',
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
    github: 'IIIMADDINIII/rollup-plugin-include-sourcemaps',
    npm: 'rollup-plugin-include-sourcemaps',
  },
  links: {
    github: 'https://github.com/IIIMADDINIII/rollup-plugin-include-sourcemaps',
    npm: 'https://www.npmjs.com/package/rollup-plugin-include-sourcemaps',
  },
  stats: {
    downloads: {
      monthly: 679,
      weekly: 266,
    },
  },
})
