import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-local-resolve',
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
  links: {
    github: 'https://github.com/frostney/rollup-plugin-local-resolve',
    npm: 'https://www.npmjs.com/package/rollup-plugin-local-resolve',
    website: 'https://github.com/frostney/rollup-plugin-local-resolve#readme',
  },
  source: {
    github: 'frostney/rollup-plugin-local-resolve',
    npm: 'rollup-plugin-local-resolve',
  },
  stats: {
    stars: 7,
    downloads: {
      monthly: 32062,
      weekly: 6006,
    },
  },
})
