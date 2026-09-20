import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-minify',
  description: 'Rollup plugin to minify generated format into new minified file, with source maps, using uglify-js.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'minify',
    'uglify',
  ],
  links: {
    github: 'https://github.com/futurist/rollup-plugin-minify',
    npm: 'https://www.npmjs.com/package/rollup-plugin-minify',
    website: 'https://github.com/futurist/rollup-plugin-minify#readme',
  },
  source: {
    github: 'futurist/rollup-plugin-minify',
    npm: 'rollup-plugin-minify',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 742,
      weekly: 167,
    },
  },
})
