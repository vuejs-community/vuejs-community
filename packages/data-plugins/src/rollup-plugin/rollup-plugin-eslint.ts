import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rollup/plugin-eslint',
  description: 'Verify entry point and all imported files with ESLint',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'plugin',
    'rollup-plugin',
    'eslint',
    'es2015',
    'es6',
    'lint',
  ],
  source: {
    github: 'rollup/plugins',
    npm: '@rollup/plugin-eslint',
  },
  links: {
    github: 'https://github.com/rollup/plugins',
    npm: 'https://www.npmjs.com/package/@rollup/plugin-eslint',
    website: 'https://github.com/rollup/plugins/tree/master/packages/eslint#readme',
  },
  stats: {
    stars: 60,
    downloads: {
      monthly: 36904,
      weekly: 7472,
    },
  },
})
