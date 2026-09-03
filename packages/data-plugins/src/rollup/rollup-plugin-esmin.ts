import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-esmin',
  description: 'Rollup plugin to minify ES6+ code using babel-minify with no transpiling to ES5',
  version: '0.1.5',
  category: 'plugin',
  tags: [
    'rollup',
    'plugin',
    'rollup-plugin',
    'minify',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/jsweb/rollup-plugin-esmin',
    npm: 'https://www.npmjs.com/package/rollup-plugin-esmin',
  },
  stats: {
    downloads: {
      monthly: 21,
      weekly: 4,
    },
  },
})
