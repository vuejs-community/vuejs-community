import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-tslint',
  description: 'Verify entry point and all imported files with TSLint',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'typscript',
    'tslint',
    'lint',
  ],
  source: {
    github: 'minocoko/rollup-plugin-tslint',
    npm: 'rollup-plugin-tslint',
  },
  links: {
    github: 'https://github.com/minocoko/rollup-plugin-tslint',
    npm: 'https://www.npmjs.com/package/rollup-plugin-tslint',
    website: 'https://github.com/minocoko/rollup-plugin-tslint#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 5035,
      weekly: 1033,
    },
  },
})
