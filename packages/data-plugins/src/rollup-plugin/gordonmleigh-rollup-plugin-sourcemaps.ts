import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@gordonmleigh/rollup-plugin-sourcemaps',
  description: 'A Rollup plugin to load sourcemaps for input files',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'rollup',
    'sourcemaps',
  ],
  source: {
    github: 'gordonmleigh/rollup-plugin-sourcemaps',
    npm: '@gordonmleigh/rollup-plugin-sourcemaps',
  },
  links: {
    github: 'https://github.com/gordonmleigh/rollup-plugin-sourcemaps',
    npm: 'https://www.npmjs.com/package/@gordonmleigh/rollup-plugin-sourcemaps',
    website: 'https://github.com/gordonmleigh/rollup-plugin-sourcemaps#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 70,
      weekly: 6,
    },
  },
})
