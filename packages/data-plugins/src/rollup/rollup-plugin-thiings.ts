import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-thiings',
  description: 'Seamless integration between Rollup and Thiings ',
  icon: 'logos:rollupjs',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'thiings',
    'rollup-plugin',
    'es2015',
    'es6',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'thiings/npm-rollup-plugin',
    npm: 'rollup-plugin-thiings',
  },
  links: {
    github: 'https://github.com/thiings/npm-rollup-plugin',
    npm: 'https://www.npmjs.com/package/rollup-plugin-thiings',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 3,
    },
  },
})
