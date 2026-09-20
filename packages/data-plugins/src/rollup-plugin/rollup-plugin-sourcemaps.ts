import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-sourcemaps',
  description: 'Rollup plugin for grabbing source maps from sourceMappingURLs',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'sourcemap',
    'source-map',
    'sourceMappingURL',
  ],
  links: {
    github: 'https://github.com/maxdavidson/rollup-plugin-sourcemaps',
    npm: 'https://www.npmjs.com/package/rollup-plugin-sourcemaps',
    website: 'https://github.com/maxdavidson/rollup-plugin-sourcemaps#readme',
  },
  source: {
    github: 'maxdavidson/rollup-plugin-sourcemaps',
    npm: 'rollup-plugin-sourcemaps',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 3029046,
      weekly: 566530,
    },
  },
})
