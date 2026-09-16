import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rollup/plugin-babel',
  description: 'Seamless integration between Rollup and Babel.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'plugin',
    'rollup-plugin',
    'babel',
    'es2015',
    'es6',
  ],
  source: {
    github: 'rollup/plugins',
    npm: '@rollup/plugin-babel',
  },
  links: {
    github: 'https://github.com/rollup/plugins',
    npm: 'https://www.npmjs.com/package/@rollup/plugin-babel',
    website: 'https://github.com/rollup/plugins/tree/master/packages/babel#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 39407739,
      weekly: 8043084,
    },
  },
})
