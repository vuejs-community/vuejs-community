import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rollup/plugin-json',
  description: 'Convert .json files to ES6 modules',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'plugin',
    'json',
    'es2015',
    'npm',
    'modules',
  ],
  source: {
    github: 'rollup/plugins',
    npm: '@rollup/plugin-json',
  },
  links: {
    github: 'https://github.com/rollup/plugins',
    npm: 'https://www.npmjs.com/package/@rollup/plugin-json',
    website: 'https://github.com/rollup/plugins/tree/master/packages/json#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 34370204,
      weekly: 6561890,
    },
  },
})
