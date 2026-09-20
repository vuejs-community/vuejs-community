import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@fusion-module/vite-plugin-module-shared',
  description: 'Vite plugin that injects an import-map for shared modules into the host HTML.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'fusion-module',
    'importmap',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@fusion-module/vite-plugin-module-shared',
  },
  source: {
    npm: '@fusion-module/vite-plugin-module-shared',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11,
      weekly: 3,
    },
  },
})
