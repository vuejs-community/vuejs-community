import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-tslint-fixed',
  description: 'Verify entry point and all imported files with TSLint',
  version: '1.0.1',
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
    npm: 'https://www.npmjs.com/package/rollup-plugin-tslint-fixed',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 3,
    },
  },
})
