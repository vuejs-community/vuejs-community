import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-peggy',
  description: 'Import PEG.js grammars as parsers directly in your code via Peggy, the PEG.js successor',
  version: '6.2.0',
  category: 'plugin',
  tags: [
    'pegjs',
    'peggy',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/caleb531/rollup-plugin-peggy',
    npm: 'https://www.npmjs.com/package/rollup-plugin-peggy',
  },
  stats: {
    downloads: {
      monthly: 100,
      weekly: 19,
    },
  },
})
