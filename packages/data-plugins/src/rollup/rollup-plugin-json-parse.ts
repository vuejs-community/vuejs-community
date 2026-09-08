import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-json-parse',
  description: 'A rollup plugin that wraps compatible objects with JSON.parse() to improve performance.',
  icon: 'logos:rollupjs',
  version: '1.1.5',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'rollup',
    'JSON.parse',
    'JSON',
    'optimisation',
    'performance',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'tjenkinson/rollup-plugin-json-parse',
    npm: 'rollup-plugin-json-parse',
  },
  links: {
    github: 'https://github.com/tjenkinson/rollup-plugin-json-parse',
    npm: 'https://www.npmjs.com/package/rollup-plugin-json-parse',
  },
  stats: {
    downloads: {
      monthly: 42,
      weekly: 10,
    },
  },
})
