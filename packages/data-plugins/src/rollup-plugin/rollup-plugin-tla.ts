import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-tla',
  description: 'A rollup plugin to add top level await support for iife/umd',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'top level await',
    'iife',
    'umd',
  ],
  links: {
    github: 'https://github.com/lisonge/rollup-plugin-tla',
    npm: 'https://www.npmjs.com/package/rollup-plugin-tla',
    website: 'https://github.com/lisonge/rollup-plugin-tla#readme',
  },
  source: {
    github: 'lisonge/rollup-plugin-tla',
    npm: 'rollup-plugin-tla',
  },
  stats: {
    stars: 12,
    downloads: {
      monthly: 1378,
      weekly: 451,
    },
  },
})
