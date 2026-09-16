import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'maptalks-rollup-plugin-alias',
  description: 'Resolves aliases with Rollup',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'resolve',
    'alias',
  ],
  source: {
    github: 'watertank/rollup-plugin-alias',
    npm: 'maptalks-rollup-plugin-alias',
  },
  links: {
    github: 'https://github.com/watertank/rollup-plugin-alias',
    npm: 'https://www.npmjs.com/package/maptalks-rollup-plugin-alias',
    website: 'https://github.com/watertank/rollup-plugin-aliar#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 120,
      weekly: 32,
    },
  },
})
