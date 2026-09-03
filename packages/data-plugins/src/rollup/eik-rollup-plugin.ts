import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@eik/rollup-plugin',
  description: 'Rollup plugin for loading import maps from a Eik server and applying the mapping to ECMAScript modules in preparation for upload to the same server.',
  version: '5.0.46',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'rollup.js',
    'rollup',
    'import',
    'url',
    'esm',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/eik-lib/rollup-plugin',
    npm: 'https://www.npmjs.com/package/@eik/rollup-plugin',
  },
  stats: {
    downloads: {
      monthly: 1451,
      weekly: 437,
    },
  },
})
