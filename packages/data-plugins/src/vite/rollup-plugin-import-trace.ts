import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-import-trace',
  description: 'Rollup/Vite plugin to track import chains for better error debugging',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'vite',
    'vite-plugin',
    'import',
    'trace',
    'debug',
    'error',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/privatenumber/rollup-plugin-import-trace',
    npm: 'https://www.npmjs.com/package/rollup-plugin-import-trace',
  },
  stats: {
    downloads: {
      monthly: 99881,
      weekly: 31282,
    },
  },
})
