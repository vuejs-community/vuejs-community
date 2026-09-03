import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@mnrendra/rollup-plugin-alias',
  description: 'A Rollup plugin to resolve alias paths and automatically read the alias configuration from tsconfig.json.',
  version: '1.1.1',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'rollup-plugin-alias',
    'alias',
    'aliases',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/mnrendra/rollup-plugin-alias',
    npm: 'https://www.npmjs.com/package/@mnrendra/rollup-plugin-alias',
  },
  stats: {
    downloads: {
      monthly: 19,
      weekly: 9,
    },
  },
})
