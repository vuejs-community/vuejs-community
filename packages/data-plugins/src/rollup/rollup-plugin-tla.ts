import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-tla',
  description: 'A rollup plugin to add top level await support for iife/umd',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'top level await',
    'iife',
    'umd',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/lisonge/rollup-plugin-tla',
    npm: 'https://www.npmjs.com/package/rollup-plugin-tla',
  },
  stats: {
    downloads: {
      monthly: 1214,
      weekly: 217,
    },
  },
})
