import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-uglify-es',
  description: 'Rollup plugin to minify generated bundle',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'uglify-es',
    'minify',
  ],
  source: {
    github: 'ezekielchentnik/rollup-plugin-uglify-es',
    npm: 'rollup-plugin-uglify-es',
  },
  links: {
    github: 'https://github.com/ezekielchentnik/rollup-plugin-uglify-es',
    npm: 'https://www.npmjs.com/package/rollup-plugin-uglify-es',
    website: 'https://github.com/ezekielchentnik/rollup-plugin-uglify-es#readme',
  },
  stats: {
    stars: 14,
    downloads: {
      monthly: 10059,
      weekly: 2339,
    },
  },
})
