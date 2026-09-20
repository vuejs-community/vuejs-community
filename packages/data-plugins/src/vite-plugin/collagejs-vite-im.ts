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
  links: {
    github: 'https://github.com/collagejs/vite',
    npm: 'https://www.npmjs.com/package/@collagejs/vite-im',
    website: 'https://collagejs.dev',
  },
  source: {
    github: 'collagejs/vite',
    npm: '@collagejs/vite-im',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 68,
      weekly: 7,
    },
  },
})
