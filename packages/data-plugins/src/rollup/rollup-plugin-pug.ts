import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-pug',
  description: 'Transforms Pug (aka Jade) templates to ES6 modules.',
  icon: 'logos:rollupjs',
  version: '1.1.1',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'javascript',
    'es6',
    'modules',
    'jade',
    'pug',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'aMarCruz/rollup-plugin-pug',
    npm: 'rollup-plugin-pug',
  },
  links: {
    github: 'https://github.com/aMarCruz/rollup-plugin-pug',
    npm: 'https://www.npmjs.com/package/rollup-plugin-pug',
  },
  stats: {
    downloads: {
      monthly: 2992,
      weekly: 788,
    },
  },
})
