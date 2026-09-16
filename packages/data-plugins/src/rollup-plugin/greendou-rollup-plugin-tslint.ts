import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@greendou/rollup-plugin-tslint',
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
    npm: '@greendou/rollup-plugin-tslint',
  },
  links: {
    github: 'https://github.com/minocoko/rollup-plugin-tslint',
    npm: 'https://www.npmjs.com/package/@greendou/rollup-plugin-tslint',
    website: 'https://github.com/minocoko/rollup-plugin-tslint#readme',
  },
  stats: {
    stars: 9,
    downloads: {
      monthly: 17,
      weekly: 1,
    },
  },
})
