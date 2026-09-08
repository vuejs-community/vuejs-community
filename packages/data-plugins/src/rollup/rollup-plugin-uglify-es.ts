import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-uglify-es',
  description: 'Rollup plugin to minify generated bundle',
  icon: 'logos:rollupjs',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'uglify-es',
    'minify',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'ezekielchentnik/rollup-plugin-uglify-es',
    npm: 'rollup-plugin-uglify-es',
  },
  links: {
    github: 'https://github.com/ezekielchentnik/rollup-plugin-uglify-es',
    npm: 'https://www.npmjs.com/package/rollup-plugin-uglify-es',
  },
  stats: {
    downloads: {
      monthly: 9822,
      weekly: 1782,
    },
  },
})
