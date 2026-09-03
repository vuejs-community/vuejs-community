import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@greendou/rollup-plugin-tslint',
  description: 'Verify entry point and all imported files with TSLint',
  version: '0.1.26',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'typscript',
    'tslint',
    'lint',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/minocoko/rollup-plugin-tslint',
    npm: 'https://www.npmjs.com/package/@greendou/rollup-plugin-tslint',
  },
  stats: {
    downloads: {
      monthly: 18,
      weekly: 4,
    },
  },
})
