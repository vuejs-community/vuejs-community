import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-source-hash',
  description: 'A rollup.js plugin that inserts hash values based on pre-bundled source code into filenames and bundled code.',
  icon: 'logos:rollupjs',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'code',
    'hash',
    'plugin',
    'rollup-plugin',
    'rollup',
    'source',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'jhildenbiddle/rollup-plugin-source-hash',
    npm: 'rollup-plugin-source-hash',
  },
  links: {
    github: 'https://github.com/jhildenbiddle/rollup-plugin-source-hash',
    npm: 'https://www.npmjs.com/package/rollup-plugin-source-hash',
  },
  stats: {
    downloads: {
      monthly: 21,
      weekly: 4,
    },
  },
})
