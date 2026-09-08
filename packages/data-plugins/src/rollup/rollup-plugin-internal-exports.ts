import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-internal-exports',
  description: 'A rollup plugin for excluding specific exports in the final bundle when using format iife',
  icon: 'logos:rollupjs',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'util',
    'plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: '',
    npm: 'rollup-plugin-internal-exports',
  },
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/rollup-plugin-internal-exports',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 4,
    },
  },
})
