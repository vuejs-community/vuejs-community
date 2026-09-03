import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@xyh19/rollup-plugin-node-externals',
  description: 'A Rollup plugin that automatically declares NodeJS built-in modules as external. Can also handle npm dependencies, devDependencies, peerDependencies and optionalDependencies. Works in monorepos too!',
  version: '1.0.3',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'externals',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@xyh19/rollup-plugin-node-externals',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 4,
    },
  },
})
