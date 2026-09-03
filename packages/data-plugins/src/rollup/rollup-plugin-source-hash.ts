import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-source-hash',
  description: 'A rollup.js plugin that inserts hash values based on pre-bundled source code into filenames and bundled code.',
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
  links: {
    github: 'https://github.com/jhildenbiddle/rollup-plugin-source-hash',
    npm: 'https://www.npmjs.com/package/rollup-plugin-source-hash',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 5,
    },
  },
})
