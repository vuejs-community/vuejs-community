import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-flow-entry',
  description: 'Allows Flow to find the original typed source code for the Rollup bundle',
  version: '0.3.6',
  category: 'plugin',
  tags: [
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/rollup-plugin-flow-entry',
  },
  stats: {
    downloads: {
      monthly: 1221,
      weekly: 252,
    },
  },
})
