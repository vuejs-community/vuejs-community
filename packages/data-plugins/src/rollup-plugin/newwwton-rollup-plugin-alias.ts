import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@newwwton/rollup-plugin-alias',
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
  links: {
    github: 'https://github.com/frostney/rollup-plugin-alias',
    npm: 'https://www.npmjs.com/package/@newwwton/rollup-plugin-alias',
    website: 'https://github.com/frostney/rollup-plugin-alias#readme',
  },
  source: {
    github: 'frostney/rollup-plugin-alias',
    npm: '@newwwton/rollup-plugin-alias',
  },
  stats: {
    stars: 171,
    downloads: {
      monthly: 18,
      weekly: 6,
    },
  },
})
