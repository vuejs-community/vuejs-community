import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-shopify-liquid-script',
  description: 'A Rollup plugin that generates Liquid templates for importing JavaScript files, with support for Shopify Liquid and custom SystemJS import mapping.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'liquid',
    'shopify',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/rollup-plugin-shopify-liquid-script',
  },
  source: {
    npm: 'rollup-plugin-shopify-liquid-script',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 9,
      weekly: 3,
    },
  },
})
