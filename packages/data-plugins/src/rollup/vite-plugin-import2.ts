import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-import2',
  description: 'A tool look like babel-plugin-import and can auto inject to vite\'s Pre-bundling dependencies.',
  version: '1.1.2',
  category: 'plugin',
  tags: [
    'auto-include',
    'vite-plugin',
    'vite',
    'babel-plugin-import',
    'vite-plugin-import',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/cx690/vite-plugin-import2',
    npm: 'https://www.npmjs.com/package/vite-plugin-import2',
  },
  stats: {
    downloads: {
      monthly: 44,
      weekly: 5,
    },
  },
})
