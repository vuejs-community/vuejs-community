import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-lasso',
  description: 'Custom JS Dependency for Lasso.js to pipe outputs from Rollup into Lasso\'s build lifecycle',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'lasso',
    'lasso-plugin',
    'rollup',
    'rollup-plugin',
    'js',
    'minify',
    'transpile',
  ],
  links: {
    github: 'https://github.com/dsathyakumar/rollup-plugin-lasso',
    npm: 'https://www.npmjs.com/package/rollup-plugin-lasso',
    website: 'https://github.com/dsathyakumar/rollup-plugin-lasso#readme',
  },
  source: {
    github: 'dsathyakumar/rollup-plugin-lasso',
    npm: 'rollup-plugin-lasso',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 15,
      weekly: 3,
    },
  },
})
