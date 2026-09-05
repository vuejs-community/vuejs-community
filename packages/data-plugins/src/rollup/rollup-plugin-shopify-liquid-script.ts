import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-shopify-liquid-script',
  description: 'A Rollup plugin that generates Liquid templates for importing JavaScript files, with support for Shopify Liquid and custom SystemJS import mapping.',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'liquid',
    'shopify',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/rollup-plugin-shopify-liquid-script',
  },
  stats: {
    downloads: {
      monthly: 3,
      weekly: 1,
    },
  },
})
