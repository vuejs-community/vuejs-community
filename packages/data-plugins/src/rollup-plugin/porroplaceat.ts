import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'porroplaceat',
  description: 'Rollup plugin to minify generated format into new minified file, with source maps, using uglify-js.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'fuga',
    'uglify',
  ],
  source: {
    github: 'MedaWeimann/porroplaceat',
    npm: 'porroplaceat',
  },
  links: {
    github: 'https://github.com/MedaWeimann/porroplaceat',
    npm: 'https://www.npmjs.com/package/porroplaceat',
    website: 'https://github.com/MedaWeimann/porroplaceat#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 6,
    },
  },
})
