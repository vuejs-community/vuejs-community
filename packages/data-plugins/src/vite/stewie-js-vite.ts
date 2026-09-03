import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@stewie-js/vite',
  description: 'Vite plugin for the Stewie framework',
  version: '0.10.3',
  category: 'plugin',
  tags: [
    'hmr',
    'jsx',
    'stewie',
    'typescript',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/cwins/stewie-js',
    npm: 'https://www.npmjs.com/package/@stewie-js/vite',
  },
  stats: {
    downloads: {
      monthly: 735,
      weekly: 333,
    },
  },
})
