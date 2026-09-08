import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-unassert',
  description: 'RollupJS plugin to remove assertion calls via Unassert',
  icon: 'logos:rollupjs',
  version: '0.6.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'unassert',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'mourner/rollup-plugin-unassert',
    npm: 'rollup-plugin-unassert',
  },
  links: {
    github: 'https://github.com/mourner/rollup-plugin-unassert',
    npm: 'https://www.npmjs.com/package/rollup-plugin-unassert',
  },
  stats: {
    downloads: {
      monthly: 7933,
      weekly: 2041,
    },
  },
})
