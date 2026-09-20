import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-pug-html',
  description: 'Rollup plugin that transforms pug (jade) templates in es6 modules.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'javascript',
    'es6',
    'jade',
    'pug',
  ],
  links: {
    github: 'https://github.com/tycho01/rollup-plugin-pug-html',
    npm: 'https://www.npmjs.com/package/rollup-plugin-pug-html',
    website: 'https://github.com/tycho01/rollup-plugin-pug-html#readme',
  },
  source: {
    github: 'tycho01/rollup-plugin-pug-html',
    npm: 'rollup-plugin-pug-html',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 12,
      weekly: 3,
    },
  },
})
