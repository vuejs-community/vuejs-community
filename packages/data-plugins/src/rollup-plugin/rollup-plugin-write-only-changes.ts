import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-write-only-changes',
  description: 'A Rollup plugin for writing files to the output directoriy only if their contents actually changed.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'plugin',
    'rollup-plugin',
    'watch',
    'changes',
    'write',
  ],
  source: {
    github: 'prantlf/rollup-plugin-write-only-changes',
    npm: 'rollup-plugin-write-only-changes',
  },
  links: {
    github: 'https://github.com/prantlf/rollup-plugin-write-only-changes',
    npm: 'https://www.npmjs.com/package/rollup-plugin-write-only-changes',
    website: 'http://prantlf.github.com/rollup-plugin-write-only-changes/',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 19,
      weekly: 6,
    },
  },
})
