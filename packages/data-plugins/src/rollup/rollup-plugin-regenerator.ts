import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-regenerator',
  description: 'A Rollup.js plugin to transform ECMAScript 6 generator and async functions',
  version: '0.6.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'transform',
    'regenerator',
    'generator',
    'async',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/notruth/rollup-plugin-regenerator',
    npm: 'https://www.npmjs.com/package/rollup-plugin-regenerator',
  },
  stats: {
    downloads: {
      monthly: 1184,
      weekly: 274,
    },
  },
})
