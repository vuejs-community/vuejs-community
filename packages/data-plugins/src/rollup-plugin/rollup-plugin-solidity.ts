import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-solidity',
  description: 'Converts solidity files to modules',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'solidity',
  ],
  source: {
    github: 'hrntknr/rollup-plugin-solidity',
    npm: 'rollup-plugin-solidity',
  },
  links: {
    github: 'https://github.com/hrntknr/rollup-plugin-solidity',
    npm: 'https://www.npmjs.com/package/rollup-plugin-solidity',
    website: 'https://github.com/hrntknr/rollup-plugin-solidity#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 22,
      weekly: 4,
    },
  },
})
