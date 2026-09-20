import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'zan-rollup-plugin-alias',
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
    npm: 'https://www.npmjs.com/package/zan-rollup-plugin-alias',
    website: 'https://github.com/frostney/rollup-plugin-aliar#readme',
  },
  source: {
    github: 'frostney/rollup-plugin-alias',
    npm: 'zan-rollup-plugin-alias',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 18,
      weekly: 6,
    },
  },
})
