import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-no-op',
  description: 'Replace imported module with \'export default {}\' using module IDs. Useful when using \'external\' is not enough.',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'rollup',
    'plugin',
    'rollup-plugin',
    'no-op',
    'noop',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/dmnsgn/rollup-plugin-no-op',
    npm: 'https://www.npmjs.com/package/rollup-plugin-no-op',
  },
  stats: {
    downloads: {
      monthly: 67,
      weekly: 19,
    },
  },
})
