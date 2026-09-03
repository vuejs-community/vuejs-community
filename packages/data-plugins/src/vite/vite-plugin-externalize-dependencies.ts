import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-externalize-dependencies',
  description: 'A simplified plugin for Vite that allows you to exclude specific dependencies from the Vite bundle during development.',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'externalize-dependencies',
    'bundle-exclusion',
    'import-maps',
    'webpack-externals',
    'rollup-externals',
    'dependency-management',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/MilanKovacic/vite-plugin-externalize-dependencies',
    npm: 'https://www.npmjs.com/package/vite-plugin-externalize-dependencies',
  },
  stats: {
    downloads: {
      monthly: 43849,
      weekly: 13940,
    },
  },
})
