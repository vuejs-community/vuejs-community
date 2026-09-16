import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-node-resolve-and-alias',
  description: 'Fork of rollup-plugin-node-resolve with aliases',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'es2015',
    'npm',
    'modules',
  ],
  source: {
    github: 'rektide/rollup-plugin-node-resolve-with-alias',
    npm: 'rollup-plugin-node-resolve-and-alias',
  },
  links: {
    github: 'https://github.com/rektide/rollup-plugin-node-resolve-with-alias',
    npm: 'https://www.npmjs.com/package/rollup-plugin-node-resolve-and-alias',
    website: 'https://github.com/rollup/rollup-plugin-node-resolve#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 35,
      weekly: 10,
    },
  },
})
