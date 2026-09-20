import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@modular-css/rollup',
  description: 'Add modular-css support to rollup',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'css',
    'css-modules',
    'modular-css',
    'postcss',
  ],
  links: {
    github: 'https://github.com/tivac/modular-css',
    npm: 'https://www.npmjs.com/package/@modular-css/rollup',
    website: 'https://m-css.com',
  },
  source: {
    github: 'tivac/modular-css',
    npm: '@modular-css/rollup',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 532,
      weekly: 92,
    },
  },
})
