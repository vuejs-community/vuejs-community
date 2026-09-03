import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@artemsemkin/vite-plugin-wp-hmr',
  description: 'Vite plugin that generates a WordPress mu-plugin for HMR dev client injection',
  version: '1.2.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'wordpress',
    'hmr',
    'hot-module-replacement',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/artkrsk/vite-plugin-wp-hmr',
    npm: 'https://www.npmjs.com/package/@artemsemkin/vite-plugin-wp-hmr',
  },
  stats: {
    downloads: {
      monthly: 61,
      weekly: 13,
    },
  },
})
