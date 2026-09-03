import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-resolve-id',
  description: 'Resolves import statements using aliases and file extensions, (sync with webpack resolve specs)',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'resolveId',
    'import',
    'alias',
    'aliases',
    'extensions',
    'resolver',
    'mainFields',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/allex/rollup-plugin-resolve-id',
    npm: 'https://www.npmjs.com/package/rollup-plugin-resolve-id',
  },
  stats: {
    downloads: {
      monthly: 27,
      weekly: 7,
    },
  },
})
