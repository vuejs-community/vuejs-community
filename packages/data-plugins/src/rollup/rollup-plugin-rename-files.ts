import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-rename-files',
  description: 'A Rollup plugin to rename the `include` files created when bundling some external libries while using preserveModules',
  version: '2.0.0',
  category: 'plugin',
  tags: [
    'rollup',
    'plugin',
    'rollup-plugin',
    'node_modules',
    'rename',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/cxsowo/rollup-plugin-rename-files',
    npm: 'https://www.npmjs.com/package/rollup-plugin-rename-files',
  },
  stats: {
    downloads: {
      monthly: 4467,
      weekly: 1262,
    },
  },
})
