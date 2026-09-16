import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@gem-mine/rollup-plugin-rename-node-modules',
  description: 'A Rollup plugin to rename the `node_modules` created when bundling some external libries while using preserveModules',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'plugin',
    'rollup-plugin',
    'node_modules',
    'rename',
  ],
  source: {
    github: 'Lazyuki/rollup-plugin-rename-node-modules',
    npm: '@gem-mine/rollup-plugin-rename-node-modules',
  },
  links: {
    github: 'https://github.com/Lazyuki/rollup-plugin-rename-node-modules',
    npm: 'https://www.npmjs.com/package/@gem-mine/rollup-plugin-rename-node-modules',
    website: 'https://github.com/Lazyuki/rollup-plugin-rename-node-modules#readme',
  },
  stats: {
    stars: 23,
    downloads: {
      monthly: 21,
      weekly: 7,
    },
  },
})
