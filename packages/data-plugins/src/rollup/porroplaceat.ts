import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'porroplaceat',
  description: 'Rollup plugin to minify generated format into new minified file, with source maps, using uglify-js.',
  version: '1.2.1',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'fuga',
    'uglify',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/MedaWeimann/porroplaceat',
    npm: 'https://www.npmjs.com/package/porroplaceat',
  },
  stats: {
    downloads: {
      monthly: 22,
      weekly: 4,
    },
  },
})
