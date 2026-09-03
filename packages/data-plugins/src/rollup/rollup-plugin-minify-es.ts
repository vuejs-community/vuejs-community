import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-minify-es',
  description: 'Rollup plugin to minify generated format into new minified file, with source maps, using uglify-es.',
  version: '1.1.1',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'minify',
    'uglify',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/edgemesh/rollup-plugin-minify-es',
    npm: 'https://www.npmjs.com/package/rollup-plugin-minify-es',
  },
  stats: {
    downloads: {
      monthly: 2413,
      weekly: 351,
    },
  },
})
