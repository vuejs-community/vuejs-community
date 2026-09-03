import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@foony/vite-plugin-import-map',
  description: 'Vite plugin that generates import maps to prevent cascading hash changes. Created by foony.com',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'import-map',
    'import-maps',
    'rollup',
    'build',
    'foony',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Foony-Limited/vite-plugin-import-map',
    npm: 'https://www.npmjs.com/package/@foony/vite-plugin-import-map',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 6,
    },
  },
})
