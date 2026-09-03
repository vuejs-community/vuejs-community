import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-node-resolve-and-alias',
  description: 'Fork of rollup-plugin-node-resolve with aliases',
  version: '3.0.0',
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
    github: 'https://github.com/rektide/rollup-plugin-node-resolve-with-alias',
    npm: 'https://www.npmjs.com/package/rollup-plugin-node-resolve-and-alias',
  },
  stats: {
    downloads: {
      monthly: 26,
      weekly: 13,
    },
  },
})
