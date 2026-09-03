import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-oss',
  description: 'A rollup plugin to list dependency licenses and zip source files',
  version: '0.4.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'vite',
    'vite-plugin',
    'rolldown',
    'license',
    'oss',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/ameinhardt/rollup-plugin-oss',
    npm: 'https://www.npmjs.com/package/rollup-plugin-oss',
  },
  stats: {
    downloads: {
      monthly: 130,
      weekly: 58,
    },
  },
})
