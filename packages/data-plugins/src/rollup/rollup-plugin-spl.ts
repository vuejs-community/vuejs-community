import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-spl',
  description: 'A Rollup plugin for Software Product Lines',
  icon: 'logos:rollupjs',
  version: '0.0.6',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'spl',
    'software-product-line',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: '125m125/rollup-plugin-spl',
    npm: 'rollup-plugin-spl',
  },
  links: {
    github: 'https://github.com/125m125/rollup-plugin-spl',
    npm: 'https://www.npmjs.com/package/rollup-plugin-spl',
  },
  stats: {
    downloads: {
      monthly: 50,
      weekly: 18,
    },
  },
})
