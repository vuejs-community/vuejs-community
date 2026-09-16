import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-json-parse',
  description: 'A rollup plugin that wraps compatible objects with JSON.parse() to improve performance.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'rollup',
    'JSON.parse',
    'JSON',
    'optimisation',
    'performance',
  ],
  source: {
    github: 'tjenkinson/rollup-plugin-json-parse',
    npm: 'rollup-plugin-json-parse',
  },
  links: {
    github: 'https://github.com/tjenkinson/rollup-plugin-json-parse',
    npm: 'https://www.npmjs.com/package/rollup-plugin-json-parse',
    website: 'https://github.com/tjenkinson/rollup-plugin-json-parse#readme',
  },
  stats: {
    stars: 7,
    downloads: {
      monthly: 33,
      weekly: 2,
    },
  },
})
