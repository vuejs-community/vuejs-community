import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-write-only-changes',
  description: 'A Rollup plugin for writing files to the output directoriy only if their contents actually changed.',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'rollup',
    'plugin',
    'rollup-plugin',
    'watch',
    'changes',
    'write',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/prantlf/rollup-plugin-write-only-changes',
    npm: 'https://www.npmjs.com/package/rollup-plugin-write-only-changes',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 2,
    },
  },
})
