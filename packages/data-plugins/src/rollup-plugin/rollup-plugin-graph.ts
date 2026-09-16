import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-graph',
  description: 'Generate module dependencies graph, using the DOT language',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
  ],
  source: {
    github: 'ondras/rollup-plugin-graph',
    npm: 'rollup-plugin-graph',
  },
  links: {
    github: 'https://github.com/ondras/rollup-plugin-graph',
    npm: 'https://www.npmjs.com/package/rollup-plugin-graph',
    website: 'https://github.com/ondras/rollup-plugin-graph',
  },
  stats: {
    stars: 32,
    downloads: {
      monthly: 174,
      weekly: 25,
    },
  },
})
