import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@swissquote/rollup-plugin-eslint',
  description: 'Verify entry point and all imported files with ESLint',
  version: '1.22.3',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'es2015',
    'eslint',
    'lint',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/swissquote/crafty',
    npm: 'https://www.npmjs.com/package/@swissquote/rollup-plugin-eslint',
  },
  stats: {
    downloads: {
      monthly: 231,
      weekly: 8,
    },
  },
})
