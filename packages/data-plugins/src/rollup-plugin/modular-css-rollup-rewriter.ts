import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@modular-css/rollup-rewriter',
  description: 'Rewrite dynamic imports to include all their CSS dependencies',
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
  source: {
    github: 'tivac/modular-css',
    npm: '@modular-css/rollup-rewriter',
  },
  links: {
    github: 'https://github.com/tivac/modular-css',
    npm: 'https://www.npmjs.com/package/@modular-css/rollup-rewriter',
    website: 'https://m-css.com',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 23,
      weekly: 6,
    },
  },
})
