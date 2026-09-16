import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-local-resolving',
  description: 'Resolves index.js files with Rollup',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'resolve',
    'folder',
    'index',
  ],
  source: {
    github: 'lakebeach/rollup-plugin-local-resolve',
    npm: 'rollup-plugin-local-resolving',
  },
  links: {
    github: 'https://github.com/lakebeach/rollup-plugin-local-resolve',
    npm: 'https://www.npmjs.com/package/rollup-plugin-local-resolving',
    website: 'https://github.com/lakebeach/rollup-plugin-local-resolving#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 18,
      weekly: 5,
    },
  },
})
