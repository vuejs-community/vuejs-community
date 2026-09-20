import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@pixi/rollup-plugin-rename-node-modules',
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
  links: {
    github: 'https://github.com/pixijs/rollup-plugin-rename-node-modules',
    npm: 'https://www.npmjs.com/package/@pixi/rollup-plugin-rename-node-modules',
    website: 'https://github.com/pixijs/rollup-plugin-rename-node-modules#readme',
  },
  source: {
    github: 'pixijs/rollup-plugin-rename-node-modules',
    npm: '@pixi/rollup-plugin-rename-node-modules',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 3709,
      weekly: 1072,
    },
  },
})
