import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@builder.io/rollup-plugin-node-resolve-browser',
  description: 'Rollup plugin node resolve for the browser, e.g. with a virtual file system',
  version: '0.0.2',
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
    npm: 'https://www.npmjs.com/package/@builder.io/rollup-plugin-node-resolve-browser',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 6,
    },
  },
})
