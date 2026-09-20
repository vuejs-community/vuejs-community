import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-unpkg',
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
    npm: 'https://www.npmjs.com/package/rollup-plugin-unpkg',
  },
  source: {
    npm: 'rollup-plugin-unpkg',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 25,
      weekly: 7,
    },
  },
})
