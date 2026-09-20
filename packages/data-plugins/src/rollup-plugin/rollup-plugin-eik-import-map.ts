import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-eik-import-map',
  description: 'Rollup plugin that uses Eik defined import map files to transform bare import specifiers to absolute URLs in ES modules',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'rollup.js',
    'rollup',
    'import',
    'url',
    'esm',
  ],
  links: {
    github: 'https://github.com/trygve-lie/rollup-plugin-esm-import-to-url',
    npm: 'https://www.npmjs.com/package/rollup-plugin-eik-import-map',
    website: 'https://github.com/trygve-lie/rollup-plugin-esm-import-to-url#readme',
  },
  source: {
    github: 'trygve-lie/rollup-plugin-esm-import-to-url',
    npm: 'rollup-plugin-eik-import-map',
  },
  stats: {
    stars: 18,
    downloads: {
      monthly: 12,
      weekly: 4,
    },
  },
})
