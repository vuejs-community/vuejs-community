import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-local-resolve',
  description: 'Resolves index.js files with Rollup',
  icon: 'logos:rollupjs',
  version: '1.0.7',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'resolve',
    'folder',
    'index',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'frostney/rollup-plugin-local-resolve',
    npm: 'rollup-plugin-local-resolve',
  },
  links: {
    github: 'https://github.com/frostney/rollup-plugin-local-resolve',
    npm: 'https://www.npmjs.com/package/rollup-plugin-local-resolve',
  },
  stats: {
    downloads: {
      monthly: 32729,
      weekly: 8964,
    },
  },
})
