import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@endorphinjs/rollup-plugin-endorphin',
  description: 'Rollup plugin for building Endorphin templates',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'endorphin',
    'endorphinjs',
  ],
  links: {
    github: 'https://github.com/endorphinjs/rollup-plugin-endorphin',
    npm: 'https://www.npmjs.com/package/@endorphinjs/rollup-plugin-endorphin',
    website: 'https://github.com/endorphinjs/rollup-plugin-endorphin#readme',
  },
  source: {
    github: 'endorphinjs/rollup-plugin-endorphin',
    npm: '@endorphinjs/rollup-plugin-endorphin',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 42,
      weekly: 4,
    },
  },
})
