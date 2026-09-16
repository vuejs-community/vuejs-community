import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-esm-import-to-url',
  description: 'Rollup plugin to transform bare import specifiers to absolute URLs in ES modules',
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
  source: {
    github: 'trygve-lie/rollup-plugin-esm-import-to-url',
    npm: 'rollup-plugin-esm-import-to-url',
  },
  links: {
    github: 'https://github.com/trygve-lie/rollup-plugin-esm-import-to-url',
    npm: 'https://www.npmjs.com/package/rollup-plugin-esm-import-to-url',
    website: 'https://github.com/trygve-lie/rollup-plugin-esm-import-to-url#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 240,
      weekly: 74,
    },
  },
})
