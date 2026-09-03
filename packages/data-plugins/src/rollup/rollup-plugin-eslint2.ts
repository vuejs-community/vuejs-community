import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-eslint2',
  description: 'Forked from @rollup/plugin-eslint, to resolve the conflict between @rollup/plugin-typescript and  @rollup/plugin-eslint',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'rollup',
    'plugin',
    'rollup-plugin',
    'eslint',
    'es2015',
    'es6',
    'lint',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/Col0ring/rollup-plugin-eslint2',
    npm: 'https://www.npmjs.com/package/rollup-plugin-eslint2',
  },
  stats: {
    downloads: {
      monthly: 21,
      weekly: 2,
    },
  },
})
