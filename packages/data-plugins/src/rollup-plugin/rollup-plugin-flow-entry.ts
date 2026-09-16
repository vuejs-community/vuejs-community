import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-flow-entry',
  description: 'Allows Flow to find the original typed source code for the Rollup bundle',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
  ],
  source: {
    npm: 'rollup-plugin-flow-entry',
  },
  links: {
    npm: 'https://www.npmjs.com/package/rollup-plugin-flow-entry',
    website: 'https://github.com/swansontec/rollup-plugin-flow-entry',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 1002,
      weekly: 231,
    },
  },
})
