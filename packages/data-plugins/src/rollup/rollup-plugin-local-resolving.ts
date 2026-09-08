import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-local-resolving',
  description: 'Resolves index.js files with Rollup',
  icon: 'logos:rollupjs',
  version: '1.1.1',
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
    github: 'lakebeach/rollup-plugin-local-resolve',
    npm: 'rollup-plugin-local-resolving',
  },
  links: {
    github: 'https://github.com/lakebeach/rollup-plugin-local-resolve',
    npm: 'https://www.npmjs.com/package/rollup-plugin-local-resolving',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 4,
    },
  },
})
