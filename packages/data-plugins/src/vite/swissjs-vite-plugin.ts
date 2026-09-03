import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@swissjs/vite-plugin',
  description: 'Vite plugin for compiling SwissJS .ui/.uix files -- delegates to @swissjs/compiler\'s own transform, no compilation logic of its own',
  version: '0.2.1',
  category: 'plugin',
  tags: [
    'swissjs',
    'vite',
    'vite-plugin',
    'framework',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/kibologic/swiss-lib',
    npm: 'https://www.npmjs.com/package/@swissjs/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 47,
      weekly: 8,
    },
  },
})
