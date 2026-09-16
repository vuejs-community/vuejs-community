import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-no-op',
  description: 'Replace imported module with \'export default {}\' using module IDs. Useful when using \'external\' is not enough.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'plugin',
    'rollup-plugin',
    'no-op',
    'noop',
  ],
  source: {
    github: 'dmnsgn/rollup-plugin-no-op',
    npm: 'rollup-plugin-no-op',
  },
  links: {
    github: 'https://github.com/dmnsgn/rollup-plugin-no-op',
    npm: 'https://www.npmjs.com/package/rollup-plugin-no-op',
    website: 'https://github.com/dmnsgn/rollup-plugin-no-op',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 51,
      weekly: 13,
    },
  },
})
