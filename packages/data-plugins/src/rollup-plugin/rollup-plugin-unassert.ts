import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-unassert',
  description: 'RollupJS plugin to remove assertion calls via Unassert',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'unassert',
  ],
  links: {
    github: 'https://github.com/mourner/rollup-plugin-unassert',
    npm: 'https://www.npmjs.com/package/rollup-plugin-unassert',
    website: 'https://github.com/mourner/rollup-plugin-unassert',
  },
  source: {
    github: 'mourner/rollup-plugin-unassert',
    npm: 'rollup-plugin-unassert',
  },
  stats: {
    stars: 5,
    downloads: {
      monthly: 9938,
      weekly: 2613,
    },
  },
})
