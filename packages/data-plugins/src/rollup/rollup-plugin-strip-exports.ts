import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-strip-exports',
  description: 'Remove unwanted exports from your code.',
  version: '2.0.7',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'strip-exports',
    'iife',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/xeroxinteractive/rollup-plugin-strip-exports',
    npm: 'https://www.npmjs.com/package/rollup-plugin-strip-exports',
  },
  stats: {
    downloads: {
      monthly: 322,
      weekly: 79,
    },
  },
})
