import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-cleaner',
  description: 'A rollup plugin to clean directories before rebuilding.',
  icon: 'logos:rollupjs',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'clean',
    'remove',
    'delete',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'saf33r/rollup-plugin-cleaner',
    npm: 'rollup-plugin-cleaner',
  },
  links: {
    github: 'https://github.com/saf33r/rollup-plugin-cleaner',
    npm: 'https://www.npmjs.com/package/rollup-plugin-cleaner',
  },
  stats: {
    downloads: {
      monthly: 48686,
      weekly: 12156,
    },
  },
})
