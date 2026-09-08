import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-copy-any-files',
  description: 'Rollup copy any files.',
  icon: 'logos:rollupjs',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'copy',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'pingan8787/rollup-plugin-copy-files',
    npm: 'rollup-plugin-copy-any-files',
  },
  links: {
    github: 'https://github.com/pingan8787/rollup-plugin-copy-files',
    npm: 'https://www.npmjs.com/package/rollup-plugin-copy-any-files',
  },
  stats: {
    downloads: {
      monthly: 32,
      weekly: 6,
    },
  },
})
