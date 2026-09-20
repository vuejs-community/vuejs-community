import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-resolve-id',
  description: 'Resolves import statements using aliases and file extensions, (sync with webpack resolve specs)',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
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
  links: {
    github: 'https://github.com/allex/rollup-plugin-resolve-id',
    npm: 'https://www.npmjs.com/package/rollup-plugin-resolve-id',
    website: 'https://github.com/allex/rollup-plugin-resolve-id',
  },
  source: {
    github: 'allex/rollup-plugin-resolve-id',
    npm: 'rollup-plugin-resolve-id',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 46,
      weekly: 18,
    },
  },
})
