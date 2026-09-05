import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-minify',
  description: 'Rollup plugin to minify generated format into new minified file, with source maps, using uglify-js.',
  version: '1.0.3',
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
    github: 'https://github.com/futurist/rollup-plugin-minify',
    npm: 'https://www.npmjs.com/package/rollup-plugin-minify',
  },
  stats: {
    downloads: {
      monthly: 842,
      weekly: 269,
    },
  },
})
