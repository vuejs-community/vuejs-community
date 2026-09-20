import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-filter-dep-graph',
  description: 'Filter and visualize the dependency graph.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/lsdsjy/rollup-plugin-filter-dep-graph',
    npm: 'https://www.npmjs.com/package/rollup-plugin-filter-dep-graph',
    website: 'https://github.com/lsdsjy/rollup-plugin-filter-dep-graph#readme',
  },
  source: {
    github: 'lsdsjy/rollup-plugin-filter-dep-graph',
    npm: 'rollup-plugin-filter-dep-graph',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 17,
      weekly: 5,
    },
  },
})
