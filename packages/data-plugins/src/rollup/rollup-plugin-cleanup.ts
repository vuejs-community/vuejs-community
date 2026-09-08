import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-cleanup',
  description: 'Rollup plugin to trim trailing spaces, compact empty lines, and normalize line endings',
  icon: 'logos:rollupjs',
  version: '3.2.1',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'javascript',
    'es6',
    'modules',
    'comments',
    'removal',
    'cleanup',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'aMarCruz/rollup-plugin-cleanup',
    npm: 'rollup-plugin-cleanup',
  },
  links: {
    github: 'https://github.com/aMarCruz/rollup-plugin-cleanup',
    npm: 'https://www.npmjs.com/package/rollup-plugin-cleanup',
  },
  stats: {
    downloads: {
      monthly: 317821,
      weekly: 80016,
    },
  },
})
