import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-jsonlint',
  description: 'Converts .json (JSON/CJSON/JSON5) files to ES6 modules.',
  version: '2.1.0',
  category: 'plugin',
  tags: [
    'rollup',
    'plugin',
    'rollup-plugin',
    'json',
    'jsonlint',
    'es2015',
    'npm',
    'modules',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/prantlf/rollup-plugin-jsonlint',
    npm: 'https://www.npmjs.com/package/rollup-plugin-jsonlint',
  },
  stats: {
    downloads: {
      monthly: 165,
      weekly: 14,
    },
  },
})
