import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-import-checker',
  description: 'A Rollup plugin that warns or throws an error when a specific import is found',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'vite-plugin',
    'rollup-plugin',
    'import',
    'modules',
  ],
  links: {
    github: 'https://github.com/ChrisLetter/rollup-plugin-import-checker',
    npm: 'https://www.npmjs.com/package/rollup-plugin-import-checker',
    website: 'https://github.com/ChrisLetter/rollup-plugin-import-checker#readme',
  },
  source: {
    github: 'ChrisLetter/rollup-plugin-import-checker',
    npm: 'rollup-plugin-import-checker',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 4,
    },
  },
})
