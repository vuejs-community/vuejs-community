import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@roenlie/vite-plugin-node',
  description: 'Vite plugin to enable your node server HMR',
  version: '1.0.2',
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
    github: 'https://github.com/roenlie/vite-plugin-node',
    npm: 'https://www.npmjs.com/package/@roenlie/vite-plugin-node',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 5,
    },
  },
})
