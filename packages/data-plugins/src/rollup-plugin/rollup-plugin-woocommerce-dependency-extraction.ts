import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-woocommerce-dependency-extraction',
  description: 'Rollup plugin to eliminate global Woocommerce dependencies.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'wordpress',
    'dependency',
    'extraction',
    'rollup',
  ],
  source: {
    github: '0zd0/rollup-plugin-woocommerce-dependency-extraction',
    npm: 'rollup-plugin-woocommerce-dependency-extraction',
  },
  links: {
    github: 'https://github.com/0zd0/rollup-plugin-woocommerce-dependency-extraction',
    npm: 'https://www.npmjs.com/package/rollup-plugin-woocommerce-dependency-extraction',
    website: 'https://github.com/0zd0/rollup-plugin-woocommerce-dependency-extraction#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 2,
    },
  },
})
