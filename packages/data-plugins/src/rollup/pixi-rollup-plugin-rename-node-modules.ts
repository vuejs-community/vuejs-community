import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@pixi/rollup-plugin-rename-node-modules',
  description: 'A Rollup plugin to rename the `node_modules` created when bundling some external libries while using preserveModules',
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
    github: 'https://github.com/pixijs/rollup-plugin-rename-node-modules',
    npm: 'https://www.npmjs.com/package/@pixi/rollup-plugin-rename-node-modules',
  },
  stats: {
    downloads: {
      monthly: 4109,
      weekly: 897,
    },
  },
})
