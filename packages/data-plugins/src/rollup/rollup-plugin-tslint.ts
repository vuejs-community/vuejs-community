import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-tslint',
  description: 'Verify entry point and all imported files with TSLint',
  version: '0.2.2',
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
    npm: 'https://www.npmjs.com/package/rollup-plugin-tslint',
  },
  stats: {
    downloads: {
      monthly: 7700,
      weekly: 1445,
    },
  },
})
