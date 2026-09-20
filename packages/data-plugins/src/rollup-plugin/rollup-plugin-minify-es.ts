import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-minify-es',
  description: 'Rollup plugin to minify generated format into new minified file, with source maps, using uglify-es.',
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
    github: 'https://github.com/edgemesh/rollup-plugin-minify-es',
    npm: 'https://www.npmjs.com/package/rollup-plugin-minify-es',
    website: 'https://github.com/edgemesh/rollup-plugin-minify-es#readme',
  },
  source: {
    github: 'edgemesh/rollup-plugin-minify-es',
    npm: 'rollup-plugin-minify-es',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 2379,
      weekly: 658,
    },
  },
})
