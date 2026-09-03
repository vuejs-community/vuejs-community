import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@collagejs/vite-im',
  description: 'Vite plug-in that injects an import map and @collagejs/imo to the project\'s HTML page',
  version: '0.4.1',
  category: 'plugin',
  tags: [
    'importmap',
    'vite',
    'vite-plugin',
    'micro-frontend',
    'collagejs',
    'mfe',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/collagejs/vite',
    npm: 'https://www.npmjs.com/package/@collagejs/vite-im',
  },
  stats: {
    downloads: {
      monthly: 221,
      weekly: 6,
    },
  },
})
