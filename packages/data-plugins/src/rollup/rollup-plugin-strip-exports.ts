import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-strip-exports',
  description: 'Remove unwanted exports from your code.',
  icon: 'logos:rollupjs',
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
  source: {
    github: 'xeroxinteractive/rollup-plugin-strip-exports',
    npm: 'rollup-plugin-strip-exports',
  },
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
