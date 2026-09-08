import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-babel-browser',
  description: 'Seamless integration between Rollup and Babel.',
  icon: 'logos:rollupjs',
  version: '5.2.1',
  category: 'plugin',
  tags: [
    'rollup',
    'plugin',
    'rollup-plugin',
    'babel',
    'es2015',
    'es6',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'rollup/plugins',
    npm: 'rollup-plugin-babel-browser',
  },
  links: {
    github: 'https://github.com/rollup/plugins',
    npm: 'https://www.npmjs.com/package/rollup-plugin-babel-browser',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 2,
    },
  },
})
