import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@flybondi/rollup-plugin-ramda',
  description: 'Removes unused ramda dependencies',
  version: '1.1.2',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'es2015',
    'modules',
    'ramda',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/flybondi/rollup-plugin-ramda',
    npm: 'https://www.npmjs.com/package/@flybondi/rollup-plugin-ramda',
  },
  stats: {
    downloads: {
      monthly: 23,
      weekly: 4,
    },
  },
})
