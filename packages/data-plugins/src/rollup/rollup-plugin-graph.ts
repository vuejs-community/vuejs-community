import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-graph',
  description: 'Generate module dependencies graph, using the DOT language',
  icon: 'logos:rollupjs',
  version: '2.0.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'ondras/rollup-plugin-graph',
    npm: 'rollup-plugin-graph',
  },
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
