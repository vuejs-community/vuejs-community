import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'importmap-vite-plugin',
  description: 'Vite plugin to generate import map JSON virtual module for sharing dependencies without duplication',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'importmap',
    'import-map',
    'esm',
    'modules',
    'dependencies',
    'module-federation',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/remorses/importmap-vite-plugin',
    npm: 'https://www.npmjs.com/package/importmap-vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 1189,
      weekly: 361,
    },
  },
})
