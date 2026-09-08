import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-strict-alias',
  description: 'Resolves aliases with Rollup',
  icon: 'logos:rollupjs',
  version: '1.0.0',
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
  source: {
    github: 'adriantoine/rollup-plugin-strict-alias',
    npm: 'rollup-plugin-strict-alias',
  },
  links: {
    github: 'https://github.com/adriantoine/rollup-plugin-strict-alias',
    npm: 'https://www.npmjs.com/package/rollup-plugin-strict-alias',
  },
  stats: {
    downloads: {
      monthly: 2100,
      weekly: 480,
    },
  },
})
