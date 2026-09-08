import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-babel-standalone',
  description: 'Seamless integration between Rollup and Babel.',
  icon: 'logos:rollupjs',
  version: '2.7.2',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'babel',
    'es2015',
    'es6',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'jetiny/rollup-plugin-babel-standalone',
    npm: 'rollup-plugin-babel-standalone',
  },
  links: {
    github: 'https://github.com/jetiny/rollup-plugin-babel-standalone',
    npm: 'https://www.npmjs.com/package/rollup-plugin-babel-standalone',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 3,
    },
  },
})
