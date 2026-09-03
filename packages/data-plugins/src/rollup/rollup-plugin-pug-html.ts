import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-pug-html',
  description: 'Rollup plugin that transforms pug (jade) templates in es6 modules.',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'javascript',
    'es6',
    'jade',
    'pug',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/tycho01/rollup-plugin-pug-html',
    npm: 'https://www.npmjs.com/package/rollup-plugin-pug-html',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 4,
    },
  },
})
