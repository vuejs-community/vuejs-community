import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'zan-rollup-plugin-alias',
  description: 'Resolves aliases with Rollup',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'resolve',
    'alias',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/frostney/rollup-plugin-alias',
    npm: 'https://www.npmjs.com/package/zan-rollup-plugin-alias',
  },
  stats: {
    downloads: {
      monthly: 18,
      weekly: 6,
    },
  },
})
