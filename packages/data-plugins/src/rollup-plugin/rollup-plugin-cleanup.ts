import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-cleanup',
  description: 'Rollup plugin to trim trailing spaces, compact empty lines, and normalize line endings',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
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
  links: {
    github: 'https://github.com/aMarCruz/rollup-plugin-cleanup',
    npm: 'https://www.npmjs.com/package/rollup-plugin-cleanup',
    website: 'https://github.com/aMarCruz/rollup-plugin-cleanup',
  },
  source: {
    github: 'aMarCruz/rollup-plugin-cleanup',
    npm: 'rollup-plugin-cleanup',
  },
  stats: {
    stars: 100,
    downloads: {
      monthly: 311982,
      weekly: 61916,
    },
  },
})
