import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-module-alias',
  description: 'A simple and flexible Vite plugin to inject and watch import maps with support for JSON files. Supports inline definitions and external configuration.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'plugin',
    'import-map',
    'vite-plugin',
    'esm',
    'importmap',
  ],
  links: {
    github: 'https://github.com/dimatitov/vite-plugin-import-map',
    npm: 'https://www.npmjs.com/package/vite-plugin-module-alias',
    website: 'https://github.com/dimatitov/vite-plugin-import-map#readme',
  },
  source: {
    github: 'dimatitov/vite-plugin-import-map',
    npm: 'vite-plugin-module-alias',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 83,
      weekly: 12,
    },
  },
})
