import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-import-checker',
  description: 'A Rollup plugin that warns or throws an error when a specific import is found',
  icon: 'logos:rollupjs',
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
  source: {
    github: 'ChrisLetter/rollup-plugin-import-checker',
    npm: 'rollup-plugin-import-checker',
  },
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
