import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-redirect-files',
  description: 'Redirect file imports using Rollup',
  icon: 'logos:rollupjs',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'import',
    'redirect',
    'file',
    'files',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'blake-mealey/rollup-plugin-redirect-files',
    npm: 'rollup-plugin-redirect-files',
  },
  links: {
    github: 'https://github.com/blake-mealey/rollup-plugin-redirect-files',
    npm: 'https://www.npmjs.com/package/rollup-plugin-redirect-files',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 7,
    },
  },
})
