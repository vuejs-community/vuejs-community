import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-diamond',
  description: 'Plugin to run diamond compiler as part of rollup build',
  version: '0.0.20',
  category: 'plugin',
  tags: [
    'diamond',
    'rollup',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/martypdx/rollup-plugin-diamond',
    npm: 'https://www.npmjs.com/package/rollup-plugin-diamond',
  },
  stats: {
    downloads: {
      monthly: 43,
      weekly: 1,
    },
  },
})
