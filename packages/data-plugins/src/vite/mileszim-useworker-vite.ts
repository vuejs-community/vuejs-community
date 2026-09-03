import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@mileszim/useworker-vite',
  description: 'Vite plugin for @mileszim/useworker — run worker functions composed from imports across files and npm packages, just like passing a pure function.',
  version: '4.2.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'web worker',
    'useWorker',
    'react',
    'worker',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/mileszim/useworker',
    npm: 'https://www.npmjs.com/package/@mileszim/useworker-vite',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 5,
    },
  },
})
