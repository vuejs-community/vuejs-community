import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@xyh19/rollup-plugin-node-externals',
  description: 'A Rollup plugin that automatically declares NodeJS built-in modules as external. Can also handle npm dependencies, devDependencies, peerDependencies and optionalDependencies. Works in monorepos too!',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'externals',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@xyh19/rollup-plugin-node-externals',
  },
  source: {
    npm: '@xyh19/rollup-plugin-node-externals',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 2,
    },
  },
})
