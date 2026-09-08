import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-unpkg',
  description: 'A rollup plugin to convert ES imports to UNPKG urls.',
  icon: 'logos:rollupjs',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: '',
    npm: 'rollup-plugin-unpkg',
  },
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/rollup-plugin-unpkg',
  },
  stats: {
    downloads: {
      monthly: 30,
      weekly: 5,
    },
  },
})
