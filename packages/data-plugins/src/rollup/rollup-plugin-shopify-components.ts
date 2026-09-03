import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-shopify-components',
  description: 'Rollup plugin for building Shopify theme components with automatic SCSS compilation and schema generation',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'shopify',
    'theme',
    'liquid',
    'scss',
    'components',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/vuluu2k/rollup-plugin-shopify-components',
    npm: 'https://www.npmjs.com/package/rollup-plugin-shopify-components',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 10,
    },
  },
})
