import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rollup/plugin-alias',
  description: 'Define and resolve aliases for bundle dependencies',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'plugin',
    'resolve',
    'alias',
  ],
  source: {
    github: 'rollup/plugins',
    npm: '@rollup/plugin-alias',
  },
  links: {
    github: 'https://github.com/rollup/plugins',
    npm: 'https://www.npmjs.com/package/@rollup/plugin-alias',
    website: 'https://github.com/rollup/plugins/tree/master/packages/alias#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16398363,
      weekly: 3112552,
    },
  },
})
