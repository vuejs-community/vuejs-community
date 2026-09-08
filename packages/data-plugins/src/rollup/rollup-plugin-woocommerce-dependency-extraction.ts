import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-woocommerce-dependency-extraction',
  description: 'Rollup plugin to eliminate global Woocommerce dependencies.',
  icon: 'logos:rollupjs',
  version: '1.0.5',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'wordpress',
    'dependency',
    'extraction',
    'rollup',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: '0zd0/rollup-plugin-woocommerce-dependency-extraction',
    npm: 'rollup-plugin-woocommerce-dependency-extraction',
  },
  links: {
    github: 'https://github.com/0zd0/rollup-plugin-woocommerce-dependency-extraction',
    npm: 'https://www.npmjs.com/package/rollup-plugin-woocommerce-dependency-extraction',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 3,
    },
  },
})
