import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-cleaner',
  description: 'A rollup plugin to clean directories before rebuilding.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'clean',
    'remove',
    'delete',
  ],
  links: {
    github: 'https://github.com/saf33r/rollup-plugin-cleaner',
    npm: 'https://www.npmjs.com/package/rollup-plugin-cleaner',
    website: 'https://github.com/saf33r/rollup-plugin-cleaner#readme',
  },
  source: {
    github: 'saf33r/rollup-plugin-cleaner',
    npm: 'rollup-plugin-cleaner',
  },
  stats: {
    stars: 7,
    downloads: {
      monthly: 41314,
      weekly: 7058,
    },
  },
})
