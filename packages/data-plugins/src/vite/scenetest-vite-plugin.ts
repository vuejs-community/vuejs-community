import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@scenetest/vite-plugin',
  description: 'Vite plugin for scenetest - strips assertions in production, injects dev panel',
  version: '0.17.0',
  category: 'plugin',
  tags: [
    'testing',
    'e2e',
    'playwright',
    'vite',
    'vite-plugin',
    'assertions',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/scenetest/scenetest-js',
    npm: 'https://www.npmjs.com/package/@scenetest/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 629,
      weekly: 383,
    },
  },
})
