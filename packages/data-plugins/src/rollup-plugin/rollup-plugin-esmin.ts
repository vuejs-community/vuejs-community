import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-esmin',
  description: 'Rollup plugin to minify ES6+ code using babel-minify with no transpiling to ES5',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'plugin',
    'rollup-plugin',
    'minify',
  ],
  source: {
    github: 'jsweb/rollup-plugin-esmin',
    npm: 'rollup-plugin-esmin',
  },
  links: {
    github: 'https://github.com/jsweb/rollup-plugin-esmin',
    npm: 'https://www.npmjs.com/package/rollup-plugin-esmin',
    website: 'https://github.com/jsweb/rollup-plugin-esmin#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 18,
      weekly: 3,
    },
  },
})
