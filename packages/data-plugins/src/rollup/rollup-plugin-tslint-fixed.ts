import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-tslint-fixed',
  description: 'Verify entry point and all imported files with TSLint',
  icon: 'logos:rollupjs',
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
  source: {
    github: 'minocoko/rollup-plugin-tslint',
    npm: 'rollup-plugin-tslint-fixed',
  },
  links: {
    github: 'https://github.com/minocoko/rollup-plugin-tslint',
    npm: 'https://www.npmjs.com/package/rollup-plugin-tslint-fixed',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 2,
    },
  },
})
