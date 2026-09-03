import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-external-globals-fork',
  description: 'Transform external imports into global variables like output.globals.',
  version: '0.12.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'es',
    'transform',
    'external',
    'globals',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/eight04/rollup-plugin-external-globals',
    npm: 'https://www.npmjs.com/package/rollup-plugin-external-globals-fork',
  },
  stats: {
    downloads: {
      monthly: 4,
      weekly: 2,
    },
  },
})
