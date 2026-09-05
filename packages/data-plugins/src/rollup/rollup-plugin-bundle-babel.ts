import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-bundle-babel',
  description: 'Bundle required babel-runtime in Rollup',
  version: '2.0.6',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'es2015',
    'npm',
    'modules',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/rollup/rollup-plugin-node-resolve',
    npm: 'https://www.npmjs.com/package/rollup-plugin-bundle-babel',
  },
  stats: {
    downloads: {
      monthly: 26,
      weekly: 2,
    },
  },
})
