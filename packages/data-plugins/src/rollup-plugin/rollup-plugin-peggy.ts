import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-peggy',
  description: 'Import PEG.js grammars as parsers directly in your code via Peggy, the PEG.js successor',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'pegjs',
    'peggy',
    'rollup-plugin',
  ],
  source: {
    github: 'caleb531/rollup-plugin-peggy',
    npm: 'rollup-plugin-peggy',
  },
  links: {
    github: 'https://github.com/caleb531/rollup-plugin-peggy',
    npm: 'https://www.npmjs.com/package/rollup-plugin-peggy',
    website: 'https://github.com/caleb531/rollup-plugin-peggy',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 102,
      weekly: 36,
    },
  },
})
