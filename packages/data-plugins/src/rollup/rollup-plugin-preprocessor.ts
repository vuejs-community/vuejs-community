import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-preprocessor',
  description: 'A Rollup plugin that adds a C-like preprocessor to Javascript.',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'c',
    'preprocessor',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/rollup-plugin-preprocessor',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 1,
    },
  },
})
