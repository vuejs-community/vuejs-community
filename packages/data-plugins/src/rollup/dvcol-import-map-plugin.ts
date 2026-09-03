import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@dvcol/import-map-plugin',
  description: 'Vite and rollup plugin to inject import map into index.html',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'typescript',
    'library',
    'vite',
    'wite-plugin',
    'rollup',
    'rollup-plugin',
    'importmap',
    'import-map',
    'html',
    'index.html',
    'esm',
    'micro-frontend',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/dvcol/vite-plugin-import-map',
    npm: 'https://www.npmjs.com/package/@dvcol/import-map-plugin',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 6,
    },
  },
})
