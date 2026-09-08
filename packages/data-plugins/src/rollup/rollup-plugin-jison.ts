import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-jison',
  description: 'Import Jison grammars as parsers directly in your code',
  icon: 'logos:rollupjs',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'jison',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'lujun2/rollup-plugin-jison',
    npm: 'rollup-plugin-jison',
  },
  links: {
    github: 'https://github.com/lujun2/rollup-plugin-jison',
    npm: 'https://www.npmjs.com/package/rollup-plugin-jison',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 3,
    },
  },
})
