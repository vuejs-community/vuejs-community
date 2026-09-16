import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-jsonlint',
  description: 'Converts .json (JSON/CJSON/JSON5) files to ES6 modules.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
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
  source: {
    github: 'prantlf/rollup-plugin-jsonlint',
    npm: 'rollup-plugin-jsonlint',
  },
  links: {
    github: 'https://github.com/prantlf/rollup-plugin-jsonlint',
    npm: 'https://www.npmjs.com/package/rollup-plugin-jsonlint',
    website: 'http://prantlf.github.com/rollup-plugin-jsonlint/',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 110,
      weekly: 11,
    },
  },
})
