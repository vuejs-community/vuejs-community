import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-lasso',
  description: 'Custom JS Dependency for Lasso.js to pipe outputs from Rollup into Lasso\'s build lifecycle',
  version: '0.0.3',
  category: 'plugin',
  tags: [
    'lasso',
    'lasso-plugin',
    'rollup',
    'rollup-plugin',
    'js',
    'minify',
    'transpile',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/dsathyakumar/rollup-plugin-lasso',
    npm: 'https://www.npmjs.com/package/rollup-plugin-lasso',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 1,
    },
  },
})
