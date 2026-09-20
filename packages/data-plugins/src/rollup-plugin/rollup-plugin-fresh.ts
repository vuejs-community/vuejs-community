import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-fresh',
  description: 'Remove all files or targeted files from a chosen directory at build time',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
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
  links: {
    github: 'https://github.com/albertopfunk/rollup-plugin-fresh',
    npm: 'https://www.npmjs.com/package/rollup-plugin-fresh',
    website: 'https://github.com/albertopfunk/rollup-plugin-fresh#readme',
  },
  source: {
    github: 'albertopfunk/rollup-plugin-fresh',
    npm: 'rollup-plugin-fresh',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 19,
      weekly: 3,
    },
  },
})
