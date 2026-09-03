import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@flaminc/vite-plugin-node',
  description: 'Vite plugin to enable your node server HMR',
  version: '3.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'node',
    'hmr',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/capitnflam/vite-plugin-node',
    npm: 'https://www.npmjs.com/package/@flaminc/vite-plugin-node',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 5,
    },
  },
})
