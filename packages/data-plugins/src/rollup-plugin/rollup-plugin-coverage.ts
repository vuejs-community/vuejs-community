import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-coverage',
  description: 'Istanbul unit test coverage plugin for Rollup.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'istanbul',
    'es2015',
    'buble',
    'es6',
    'rollup',
    'instrumenter',
    'coverage',
  ],
  source: {
    npm: 'rollup-plugin-coverage',
  },
  links: {
    npm: 'https://www.npmjs.com/package/rollup-plugin-coverage',
    website: 'https://gitlab.com/kflash/rollup-plugin-coverage',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 116,
      weekly: 17,
    },
  },
})
