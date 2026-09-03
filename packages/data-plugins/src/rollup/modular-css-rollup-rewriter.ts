import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@modular-css/rollup-rewriter',
  description: 'Rewrite dynamic imports to include all their CSS dependencies',
  version: '28.0.1',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'css',
    'css-modules',
    'modular-css',
    'postcss',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/tivac/modular-css',
    npm: 'https://www.npmjs.com/package/@modular-css/rollup-rewriter',
  },
  stats: {
    downloads: {
      monthly: 46,
      weekly: 6,
    },
  },
})
