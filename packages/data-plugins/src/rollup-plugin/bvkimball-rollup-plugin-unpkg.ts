import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@bvkimball/rollup-plugin-unpkg',
  description: 'A rollup plugin to convert ES imports to UNPKG urls.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@bvkimball/rollup-plugin-unpkg',
  },
  source: {
    npm: '@bvkimball/rollup-plugin-unpkg',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 1,
    },
  },
})
