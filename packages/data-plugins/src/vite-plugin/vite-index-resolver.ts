import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-index-resolver',
  description: 'Vite plugin that resolves relative directory imports to _index files for folder-based module conventions.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    npm: 'https://www.npmjs.com/package/vite-index-resolver',
    website: 'https://gitlab.com/reinaven/vite-index-resolver#readme',
  },
  source: {
    npm: 'vite-index-resolver',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 9,
      weekly: 1,
    },
  },
})
