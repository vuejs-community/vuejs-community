import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-ascii',
  description: 'Rewrite JavaScript to escape any non-ASCII characters in string literals.',
  icon: 'logos:rollupjs',
  version: '0.0.3',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'ascii',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'mbostock/rollup-plugin-ascii',
    npm: 'rollup-plugin-ascii',
  },
  links: {
    github: 'https://github.com/mbostock/rollup-plugin-ascii',
    npm: 'https://www.npmjs.com/package/rollup-plugin-ascii',
  },
  stats: {
    downloads: {
      monthly: 327,
      weekly: 61,
    },
  },
})
