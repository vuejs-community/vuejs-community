import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@rollup-extras/plugin-mangle',
  description: 'Rollup plugin to mangle/minify specific variables and properties by prefix.',
  version: '0.1.2',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'mangle',
    'minify',
    'properties',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/kshutkin/rollup-extras',
    npm: 'https://www.npmjs.com/package/@rollup-extras/plugin-mangle',
  },
  stats: {
    downloads: {
      monthly: 6,
      weekly: 2,
    },
  },
})
