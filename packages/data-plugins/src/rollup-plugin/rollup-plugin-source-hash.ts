import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-source-hash',
  description: 'A rollup.js plugin that inserts hash values based on pre-bundled source code into filenames and bundled code.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'code',
    'hash',
    'plugin',
    'rollup-plugin',
    'rollup',
    'source',
  ],
  source: {
    github: 'jhildenbiddle/rollup-plugin-source-hash',
    npm: 'rollup-plugin-source-hash',
  },
  links: {
    github: 'https://github.com/jhildenbiddle/rollup-plugin-source-hash',
    npm: 'https://www.npmjs.com/package/rollup-plugin-source-hash',
    website: 'https://github.com/jhildenbiddle/rollup-plugin-source-hash#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 18,
      weekly: 3,
    },
  },
})
