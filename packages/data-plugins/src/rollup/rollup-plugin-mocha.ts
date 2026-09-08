import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-mocha',
  description: 'A Rollup plugin wrapper for Mocha.',
  icon: 'logos:rollupjs',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'mocha',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'Arnesfield/rollup-plugin-mocha',
    npm: 'rollup-plugin-mocha',
  },
  links: {
    github: 'https://github.com/Arnesfield/rollup-plugin-mocha',
    npm: 'https://www.npmjs.com/package/rollup-plugin-mocha',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 2,
    },
  },
})
