import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-shopify-components',
  description: 'Rollup plugin for building Shopify theme components with automatic SCSS compilation and schema generation',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'shopify',
    'theme',
    'liquid',
    'scss',
    'components',
  ],
  source: {
    github: 'vuluu2k/rollup-plugin-shopify-components',
    npm: 'rollup-plugin-shopify-components',
  },
  links: {
    github: 'https://github.com/vuluu2k/rollup-plugin-shopify-components',
    npm: 'https://www.npmjs.com/package/rollup-plugin-shopify-components',
    website: 'https://github.com/vuluu2k/rollup-plugin-shopify-components#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 19,
      weekly: 4,
    },
  },
})
