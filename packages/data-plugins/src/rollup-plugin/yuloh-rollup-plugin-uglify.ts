import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@yuloh/rollup-plugin-uglify',
  description: 'A simple plugin for using UglifyJS with Rollup',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
  ],
  source: {
    github: 'matt-allan/rollup-plugin-uglify',
    npm: '@yuloh/rollup-plugin-uglify',
  },
  links: {
    github: 'https://github.com/matt-allan/rollup-plugin-uglify',
    npm: 'https://www.npmjs.com/package/@yuloh/rollup-plugin-uglify',
    website: 'https://github.com/matt-allan/rollup-plugin-uglify',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 19,
      weekly: 3,
    },
  },
})
