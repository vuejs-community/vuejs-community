import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-module-alias',
  description: 'A simple and flexible Vite plugin to inject and watch import maps with support for JSON files. Supports inline definitions and external configuration.',
  icon: 'logos:vite-icon',
  version: '1.3.5',
  category: 'plugin',
  tags: [
    'vite',
    'plugin',
    'import-map',
    'vite-plugin',
    'esm',
    'importmap',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'dimatitov/vite-plugin-import-map',
    npm: 'vite-plugin-module-alias',
  },
  links: {
    github: 'https://github.com/dimatitov/vite-plugin-import-map',
    npm: 'https://www.npmjs.com/package/vite-plugin-module-alias',
  },
  stats: {
    downloads: {
      monthly: 100,
      weekly: 21,
    },
  },
})
