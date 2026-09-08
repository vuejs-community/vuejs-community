import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-pug-html',
  description: 'Rollup plugin that transforms pug (jade) templates in es6 modules.',
  icon: 'logos:rollupjs',
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
  source: {
    github: 'tycho01/rollup-plugin-pug-html',
    npm: 'rollup-plugin-pug-html',
  },
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
