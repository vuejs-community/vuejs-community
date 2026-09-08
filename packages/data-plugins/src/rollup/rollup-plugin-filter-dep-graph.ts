import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-filter-dep-graph',
  description: 'Filter and visualize the dependency graph.',
  icon: 'logos:rollupjs',
  version: '0.0.5',
  category: 'plugin',
  tags: [
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'lsdsjy/rollup-plugin-filter-dep-graph',
    npm: 'rollup-plugin-filter-dep-graph',
  },
  links: {
    github: 'https://github.com/lsdsjy/rollup-plugin-filter-dep-graph',
    npm: 'https://www.npmjs.com/package/rollup-plugin-filter-dep-graph',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 1,
    },
  },
})
