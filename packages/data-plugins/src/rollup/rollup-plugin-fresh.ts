import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-fresh',
  description: 'Remove all files or targeted files from a chosen directory at build time',
  icon: 'logos:rollupjs',
  version: '2.6.3',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'rollup',
    'plugin',
    'directory',
    'files',
    'clear',
    'remove',
    'delete',
    'clean',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'albertopfunk/rollup-plugin-fresh',
    npm: 'rollup-plugin-fresh',
  },
  links: {
    github: 'https://github.com/albertopfunk/rollup-plugin-fresh',
    npm: 'https://www.npmjs.com/package/rollup-plugin-fresh',
  },
  stats: {
    downloads: {
      monthly: 31,
      weekly: 7,
    },
  },
})
