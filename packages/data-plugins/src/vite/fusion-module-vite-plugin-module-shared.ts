import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@fusion-module/vite-plugin-module-shared',
  description: 'Vite plugin that injects an import-map for shared modules into the host HTML.',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'fusion-module',
    'importmap',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@fusion-module/vite-plugin-module-shared',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 3,
    },
  },
})
