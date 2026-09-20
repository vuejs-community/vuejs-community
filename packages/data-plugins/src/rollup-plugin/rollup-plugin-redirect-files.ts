import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-redirect-files',
  description: 'Redirect file imports using Rollup',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'import',
    'redirect',
    'file',
    'files',
  ],
  links: {
    github: 'https://github.com/blake-mealey/rollup-plugin-redirect-files',
    npm: 'https://www.npmjs.com/package/rollup-plugin-redirect-files',
    website: 'https://github.com/blake-mealey/rollup-plugin-redirect-files#readme',
  },
  source: {
    github: 'blake-mealey/rollup-plugin-redirect-files',
    npm: 'rollup-plugin-redirect-files',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 25,
      weekly: 7,
    },
  },
})
