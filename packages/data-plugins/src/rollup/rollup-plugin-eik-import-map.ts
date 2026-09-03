import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-eik-import-map',
  description: 'Rollup plugin that uses Eik defined import map files to transform bare import specifiers to absolute URLs in ES modules',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'rollup.js',
    'rollup',
    'import',
    'url',
    'esm',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/trygve-lie/rollup-plugin-esm-import-to-url',
    npm: 'https://www.npmjs.com/package/rollup-plugin-eik-import-map',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 2,
    },
  },
})
