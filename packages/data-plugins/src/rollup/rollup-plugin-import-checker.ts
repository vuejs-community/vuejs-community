import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-import-checker',
  description: 'A Rollup plugin that warns or throws an error when a specific import is found',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'rollup-plugin',
    'import',
    'modules',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/ChrisLetter/rollup-plugin-import-checker',
    npm: 'https://www.npmjs.com/package/rollup-plugin-import-checker',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 1,
    },
  },
})
