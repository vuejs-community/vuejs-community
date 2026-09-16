import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@deer404/rollup-collection-plugin',
  description: 'A Rollup plugin to preserve use directives',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'directives',
    'use strict',
  ],
  source: {
    npm: '@deer404/rollup-collection-plugin',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@deer404/rollup-collection-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 24,
      weekly: 6,
    },
  },
})
