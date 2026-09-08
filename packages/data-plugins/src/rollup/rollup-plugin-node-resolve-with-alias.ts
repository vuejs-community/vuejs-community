import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-node-resolve-with-alias',
  description: 'Fork of rollup-plugin-node-resolve with aliases',
  icon: 'logos:rollupjs',
  version: '3.0.1',
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
  source: {
    github: 'rektide/rollup-plugin-node-resolve-with-alias',
    npm: 'rollup-plugin-node-resolve-with-alias',
  },
  links: {
    github: 'https://github.com/rektide/rollup-plugin-node-resolve-with-alias',
    npm: 'https://www.npmjs.com/package/rollup-plugin-node-resolve-with-alias',
  },
  stats: {
    downloads: {
      monthly: 19,
      weekly: 6,
    },
  },
})
