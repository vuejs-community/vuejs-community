import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-index-resolver',
  description: 'Vite plugin that resolves relative directory imports to _index files for folder-based module conventions.',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'plugin',
    'resolver',
    'index',
    '_index',
    'module-resolution',
    'folder-modules',
    'esm',
    'vite',
    'rollup',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-index-resolver',
  },
  stats: {
    downloads: {
      monthly: 2,
      weekly: 1,
    },
  },
})
