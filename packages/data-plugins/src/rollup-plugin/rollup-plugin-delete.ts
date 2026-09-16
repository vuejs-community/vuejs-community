import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-delete',
  description: 'Delete files and folders using Rollup',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'delete',
    'clear',
    'clean',
    'remove',
    'file',
    'folder',
    'directory',
  ],
  source: {
    github: 'vladshcherbin/rollup-plugin-delete',
    npm: 'rollup-plugin-delete',
  },
  links: {
    github: 'https://github.com/vladshcherbin/rollup-plugin-delete',
    npm: 'https://www.npmjs.com/package/rollup-plugin-delete',
    website: 'https://github.com/vladshcherbin/rollup-plugin-delete#readme',
  },
  stats: {
    stars: 70,
    downloads: {
      monthly: 548475,
      weekly: 97011,
    },
  },
})
