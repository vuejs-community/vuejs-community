import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-solidity',
  description: 'Converts solidity files to modules',
  icon: 'logos:rollupjs',
  version: '0.1.6',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'solidity',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'hrntknr/rollup-plugin-solidity',
    npm: 'rollup-plugin-solidity',
  },
  links: {
    github: 'https://github.com/hrntknr/rollup-plugin-solidity',
    npm: 'https://www.npmjs.com/package/rollup-plugin-solidity',
  },
  stats: {
    downloads: {
      monthly: 27,
      weekly: 5,
    },
  },
})
