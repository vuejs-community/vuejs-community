import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-jison',
  description: 'Import Jison grammars as parsers directly in your code',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'jison',
    'rollup-plugin',
  ],
  source: {
    github: 'lujun2/rollup-plugin-jison',
    npm: 'rollup-plugin-jison',
  },
  links: {
    github: 'https://github.com/lujun2/rollup-plugin-jison',
    npm: 'https://www.npmjs.com/package/rollup-plugin-jison',
    website: 'https://github.com/lujun2/rollup-plugin-jison#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 19,
      weekly: 2,
    },
  },
})
