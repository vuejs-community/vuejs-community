import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-graph',
  description: 'Generate module dependencies graph, using the DOT language',
  version: '2.0.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/ondras/rollup-plugin-graph',
    npm: 'https://www.npmjs.com/package/rollup-plugin-graph',
  },
  stats: {
    downloads: {
      monthly: 203,
      weekly: 35,
    },
  },
})
