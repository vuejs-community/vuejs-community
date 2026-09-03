import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@yuloh/rollup-plugin-terser',
  description: 'A simple plugin for using Terser with Rollup',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'terser',
    'minify',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/matt-allan/rollup-plugin-terser',
    npm: 'https://www.npmjs.com/package/@yuloh/rollup-plugin-terser',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 6,
    },
  },
})
