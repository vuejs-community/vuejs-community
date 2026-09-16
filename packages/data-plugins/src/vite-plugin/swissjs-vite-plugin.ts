import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@swissjs/vite-plugin',
  description: 'Vite plugin for compiling SwissJS .ui/.uix files -- delegates to @swissjs/compiler\'s own transform, no compilation logic of its own',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'swissjs',
    'vite',
    'vite-plugin',
    'framework',
  ],
  source: {
    github: 'kibologic/swiss-lib',
    npm: '@swissjs/vite-plugin',
  },
  links: {
    github: 'https://github.com/kibologic/swiss-lib',
    npm: 'https://www.npmjs.com/package/@swissjs/vite-plugin',
    website: 'https://github.com/ThembaMzumara/SWISS#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 22,
      weekly: 2,
    },
  },
})
