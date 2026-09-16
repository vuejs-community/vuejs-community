import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@collagejs/vite-im',
  description: 'Vite plug-in that injects an import map and @collagejs/imo to the project\'s HTML page',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'importmap',
    'vite',
    'vite-plugin',
    'micro-frontend',
    'collagejs',
    'mfe',
  ],
  source: {
    github: 'collagejs/vite',
    npm: '@collagejs/vite-im',
  },
  links: {
    github: 'https://github.com/collagejs/vite',
    npm: 'https://www.npmjs.com/package/@collagejs/vite-im',
    website: 'https://collagejs.dev',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 68,
      weekly: 7,
    },
  },
})
