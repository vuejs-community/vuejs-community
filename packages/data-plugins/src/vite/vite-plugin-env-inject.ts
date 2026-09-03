import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-env-inject',
  description: 'Vite plugin for runtime environment variable injection in browser builds and Docker deployments',
  version: '0.2.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'env',
    'environment-variables',
    'node',
    'rolldown',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/timi137137/vite-plugin-env-inject',
    npm: 'https://www.npmjs.com/package/vite-plugin-env-inject',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 1,
    },
  },
})
