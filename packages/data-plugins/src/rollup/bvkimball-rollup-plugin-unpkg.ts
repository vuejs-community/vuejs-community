import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@bvkimball/rollup-plugin-unpkg',
  description: 'A rollup plugin to convert ES imports to UNPKG urls.',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@bvkimball/rollup-plugin-unpkg',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 5,
    },
  },
})
