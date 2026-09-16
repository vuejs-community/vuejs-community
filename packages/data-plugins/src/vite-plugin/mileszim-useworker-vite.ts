import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@mileszim/useworker-vite',
  description: 'Vite plugin for @mileszim/useworker — run worker functions composed from imports across files and npm packages, just like passing a pure function.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'web worker',
    'useWorker',
    'react',
    'worker',
  ],
  source: {
    github: 'mileszim/useworker',
    npm: '@mileszim/useworker-vite',
  },
  links: {
    github: 'https://github.com/mileszim/useworker',
    npm: 'https://www.npmjs.com/package/@mileszim/useworker-vite',
    website: 'https://github.com/mileszim/useworker#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 19,
      weekly: 4,
    },
  },
})
