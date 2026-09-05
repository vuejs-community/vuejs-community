import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-rename-node-modules',
  description: 'A Rollup plugin to rename the `node_modules` created when bundling some external libries while using preserveModules',
  version: '1.3.1',
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
    github: 'https://github.com/Lazyuki/rollup-plugin-rename-node-modules',
    npm: 'https://www.npmjs.com/package/rollup-plugin-rename-node-modules',
  },
  stats: {
    downloads: {
      monthly: 34557,
      weekly: 8577,
    },
  },
})
