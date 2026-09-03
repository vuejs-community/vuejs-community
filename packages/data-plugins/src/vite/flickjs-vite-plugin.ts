import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@flickjs/vite-plugin',
  description: 'Vite plugin for Flick framework',
  version: '0.0.1-beta.3',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'flick',
    'jsx',
    'compiler',
    'reactive',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/jaymalave/flick',
    npm: 'https://www.npmjs.com/package/@flickjs/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 3,
    },
  },
})
